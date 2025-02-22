use crate::reward::Reward;

#[derive(Debug)]
pub struct RewardLocation {
    location_type: LocationType,
    location: Location,
    name: &'static str,
    address: u32,
    reward: Reward,
    second_visit: bool,
}

#[derive(Debug)]
pub enum LocationType {
    Popup,
    Chest,
    BigChest,
    LevelUp,
    Bonus,
    Keyblade,
    GoofyBonus,
    Shield,
    DonaldBonus,
    Staff,
    FormLevelUp,
    CriticalExtra,
}

#[derive(Debug)]
pub enum Location {
    Agrabah,
    Atlantica,
    BeastsCastle,
    CavernofRemembrance,
    CriticalExtra,
    DisneyCastle,
    Donald,
    Form,
    Goofy,
    HalloweenTown,
    HollowBastion,
    LandofDragons,
    LevelUp,
    OlympusColisseum,
    OlympusColisseumCups,
    AbsentSilhouette,
    DataOrganizationXIII,
    HundredAcreWood,
    PortRoyal,
    PrideLands,
    SimulatedTwilightTown,
    SpaceParanoids,
    Synthesis,
    TimelessRiver,
    TwilightTown,
    TheWorldThatNeverWas,
}
