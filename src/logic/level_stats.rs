use std::collections::HashSet;

use lazy_static::lazy_static;
use rand::{distributions::Standard, prelude::*};
use strum::{EnumIter, IntoEnumIterator};

use crate::{modification::Modification, seed::SeedRng};

#[derive(Debug, Clone, Copy)]
pub struct LevelUpStats {
    level: u8,
    ap: u8,
    def: u8,
    mp: u8,
    str: u8,
}

impl LevelUpStats {
    pub fn from_seed(seed: &'_ str) -> LevelUpStatsIterator {
        LevelUpStatsIterator::new(seed)
    }

    fn increase(&mut self, stat: &Stat) {
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
    fn address(&self) -> Option<u32> {
        Some(LEVEL_UP_ADDRESS_OFFSET + self.level as u32 * RADIX)
    }

    fn value(&self) -> Option<u32> {
        let hex = [self.ap, self.def, self.mp, self.str]
            .map(|stat| format!("{:0>2X}", stat))
            .join("");
        u32::from_str_radix(&hex, RADIX).ok()
    }
}

#[derive(Debug)]
pub struct LevelUpStatsIterator<'a> {
    seed: &'a str,
    stats: LevelUpStats,
}

lazy_static! {
    static ref DOUBLE_STAT_LEVELS: HashSet<u8> = HashSet::from_iter([
        3, 5, 6, 8, 11, 13, 16, 18, 19, 21, 24, 29, 35, 37, 40, 45, 51, 55, 57, 61, 63, 67, 69, 71,
        75, 77, 79, 81, 83, 87, 89, 91, 95, 97,
    ]);
}

impl<'a> LevelUpStatsIterator<'a> {
    fn new(seed: &'a str) -> Self {
        Self {
            seed,
            stats: Default::default(),
        }
    }

    fn level_up(&mut self) {
        self.stats.level += 1;

        let mut seed = SeedRng::new(format!("Seed {} - Level {}", self.seed, self.stats.level));

        let stat = seed.rng().gen::<Stat>();
        self.stats.increase(&stat);

        if DOUBLE_STAT_LEVELS.contains(&self.stats.level) {
            let stat = stat.others().choose(seed.rng()).unwrap();
            self.stats.increase(&stat);
        }
    }
}

impl<'a> Iterator for LevelUpStatsIterator<'a> {
    type Item = LevelUpStats;

    fn next(&mut self) -> Option<Self::Item> {
        if self.stats.level == 99 {
            return None;
        }

        self.level_up();

        Some(self.stats)
    }
}

#[derive(Debug, PartialEq, EnumIter)]
enum Stat {
    Ability,
    Defense,
    Magic,
    Strength,
}

impl Stat {
    fn others(&self) -> impl Iterator<Item = Self> + '_ {
        Self::iter().filter(move |s| s != self)
    }
}

impl Distribution<Stat> for Standard {
    fn sample<R: Rng + ?Sized>(&self, rng: &mut R) -> Stat {
        Stat::iter().choose(rng).unwrap()
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
        assert_eq!(level_up.address(), Some(0x21D0B6BC));
        level_up.level = 50;
        assert_eq!(level_up.address(), Some(0x21D0B9BC));
        level_up.level = 99;
        assert_eq!(level_up.address(), Some(0x21D0BCCC));
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
        assert_eq!(level_up.value(), Some(0x00020602));
        set_stats!(level_up, 50);
        assert_eq!(level_up.value(), Some(0x32323232));
        set_stats!(level_up, 255);
        assert_eq!(level_up.value(), Some(0xFFFFFFFF));
    }
}
