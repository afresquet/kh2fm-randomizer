#[derive(Debug)]
pub struct Reward {
    reward_type: RewardType,
    name: String,
    value: String,
}

#[derive(Debug)]
pub enum RewardType {
    Keyblade,
    Shield,
    Staff,
    Ability,
    Spell,
    Form,
    Summon,
    Item,
    SynthesisMaterial,
    Armor,
    Accessory,
    Map,
    TornPage,
    Report,
    Recipe,
    Proof,
    KeyItem,
    BonusModifier,
}

#[derive(Debug)]
pub struct RewardLocation {
    location_type: LocationType,
    location: Location,
    name: String,
    value: String,
    reward: Reward,
    second_visit: Option<bool>,
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
