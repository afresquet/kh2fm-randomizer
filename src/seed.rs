use rand::{rngs::StdRng, SeedableRng};

#[derive(Debug)]
pub struct SeedRng(StdRng);

impl SeedRng {
    pub fn new(seed: impl Into<Seed>) -> Self {
        let Seed(seed) = seed.into();
        Self(StdRng::seed_from_u64(seed))
    }

    pub fn rng(&mut self) -> &mut StdRng {
        &mut self.0
    }
}

use std::{
    collections::hash_map::DefaultHasher,
    hash::{Hash, Hasher},
};

pub(crate) struct Seed(u64);

impl From<u64> for Seed {
    fn from(value: u64) -> Self {
        Self(value)
    }
}

impl From<&str> for Seed {
    fn from(value: &str) -> Self {
        let mut hasher = DefaultHasher::new();
        value.hash(&mut hasher);
        Self(hasher.finish())
    }
}

impl From<String> for Seed {
    fn from(value: String) -> Self {
        Self::from(&*value)
    }
}

impl From<&String> for Seed {
    fn from(value: &String) -> Self {
        Self::from(&**value)
    }
}
