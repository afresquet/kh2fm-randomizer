use std::hash::{DefaultHasher, Hash, Hasher};

use rand::{SeedableRng, rngs::StdRng};

#[derive(Debug, Clone, Copy)]
pub struct Seed {
    value: u64,
}

impl Seed {
    pub fn new<T: Hash>(value: T) -> Self {
        Self::from(value)
    }

    pub fn rng(&self) -> StdRng {
        StdRng::seed_from_u64(self.value)
    }

    pub fn variant<T: Hash>(&self, value: T) -> Self {
        let mut other = Self::from(value);
        other.value = other.value.wrapping_add(self.value);
        other
    }
}

impl<T: Hash> From<T> for Seed {
    fn from(value: T) -> Self {
        let mut hasher = DefaultHasher::new();
        value.hash(&mut hasher);
        Self {
            value: hasher.finish(),
        }
    }
}
