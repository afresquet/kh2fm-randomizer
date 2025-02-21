use rand::{distr::StandardUniform, prelude::*};

use crate::{modification::Modification, seed::Seed};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct LevelUpStats {
    level: u8,
    ap: u8,
    def: u8,
    mp: u8,
    str: u8,
}

impl LevelUpStats {
    pub fn from_seed(seed: Seed) -> LevelUpStatsIterator {
        LevelUpStatsIterator::new(seed)
    }

    fn increase(&mut self, stat: Stat) {
        match stat {
            Stat::Ability => self.ap += 2,
            Stat::Defense => self.def += 1,
            Stat::Magic => self.mp += 2,
            Stat::Strength => self.str += 2,
        }
    }
}

impl Default for LevelUpStats {
    fn default() -> Self {
        Self {
            level: 1,
            ap: 0,
            def: 2,
            mp: 6,
            str: 2,
        }
    }
}

const LEVEL_UP_ADDRESS_OFFSET: u32 = 0x21D0B69C;
const RADIX: u32 = 16;

impl Modification for LevelUpStats {
    fn address(&self) -> u32 {
        LEVEL_UP_ADDRESS_OFFSET + self.level as u32 * RADIX
    }

    fn value(&self) -> u32 {
        u32::from_be_bytes([self.ap, self.def, self.mp, self.str])
    }
}

#[derive(Debug)]
pub struct LevelUpStatsIterator {
    seed: Seed,
    stats: LevelUpStats,
}

const DOUBLE_STAT_LEVELS: [u8; 34] = [
    3, 5, 6, 8, 11, 13, 16, 18, 19, 21, 24, 29, 35, 37, 40, 45, 51, 55, 57, 61, 63, 67, 69, 71, 75,
    77, 79, 81, 83, 87, 89, 91, 95, 97,
];

impl LevelUpStatsIterator {
    fn new(seed: Seed) -> Self {
        Self {
            seed,
            stats: Default::default(),
        }
    }

    fn level_up(&mut self) {
        self.stats.level += 1;

        let seed = self.seed.variant(self.stats.level);
        let mut rng = seed.rng();

        let stat = rng.random::<Stat>();
        self.stats.increase(stat);

        if DOUBLE_STAT_LEVELS.contains(&self.stats.level) {
            let stat = stat
                .others()
                .choose(&mut rng)
                .expect("`others` does not return an empty iterator");
            self.stats.increase(stat);
        }
    }
}

impl Iterator for LevelUpStatsIterator {
    type Item = LevelUpStats;

    fn next(&mut self) -> Option<Self::Item> {
        if self.stats.level >= 99 {
            return None;
        }

        self.level_up();

        Some(self.stats)
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Stat {
    Ability,
    Defense,
    Magic,
    Strength,
}

impl Stat {
    fn iter() -> impl Iterator<Item = Self> {
        [Stat::Ability, Stat::Defense, Stat::Magic, Stat::Strength].into_iter()
    }

    fn others(&self) -> impl Iterator<Item = Self> + use<'_> {
        Self::iter().filter(move |s| s != self)
    }
}

impl Distribution<Stat> for StandardUniform {
    fn sample<R: Rng + ?Sized>(&self, rng: &mut R) -> Stat {
        match rng.random_range(0u8..4) {
            0 => Stat::Ability,
            1 => Stat::Defense,
            2 => Stat::Magic,
            3 => Stat::Strength,
            4.. => unreachable!("only 4 stat variants"),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn level_up_address() {
        let mut level_up = LevelUpStats {
            level: 2,
            ..Default::default()
        };
        assert_eq!(level_up.address(), 0x21D0B6BC);
        level_up.level = 50;
        assert_eq!(level_up.address(), 0x21D0B9BC);
        level_up.level = 99;
        assert_eq!(level_up.address(), 0x21D0BCCC);
    }

    macro_rules! set_stats {
        ($level_up:ident, $value:expr) => {
            $level_up.ap = $value;
            $level_up.def = $value;
            $level_up.mp = $value;
            $level_up.str = $value;
        };
    }

    #[test]
    fn level_up_value() {
        let mut level_up = LevelUpStats::default();
        assert_eq!(level_up.value(), 0x00020602);
        set_stats!(level_up, 50);
        assert_eq!(level_up.value(), 0x32323232);
        set_stats!(level_up, 255);
        assert_eq!(level_up.value(), 0xFFFFFFFF);
    }

    #[test]
    fn level_up_iterator() {
        let seed = Seed::new(123);
        let result = LevelUpStats::from_seed(seed).collect::<Vec<_>>();
        assert_eq!(result.len(), 98);
    }
}
