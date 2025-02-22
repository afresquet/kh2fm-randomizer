#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RewardKind {
    Ability,
    Accessory,
    Armor,
    BonusModifier,
    Form,
    Item,
    KeyItem,
    Keyblade,
    Map,
    Proof,
    Recipe,
    Report,
    Shield,
    Spell,
    Staff,
    Summon,
    SynthesisMaterial,
    TornPage,
}
use RewardKind::*;

#[derive(Debug, Clone, Copy, PartialEq, Eq, randomizer_macros::Rewards)]
pub enum Reward {
    // Action Abilities
    // Sora
    #[reward(0x0052, "Guard", Ability)]
    Guard,
    #[reward(0x0089, "Upper Slash", Ability)]
    UpperSlash,
    #[reward(0x010F, "Horizontal Slash", Ability)]
    HorizontalSlash,
    #[reward(0x010B, "Finishing Leap", Ability)]
    FinishingLeap,
    #[reward(0x0111, "Retaliating Slash", Ability)]
    RetaliatingSlash,
    #[reward(0x0106, "Slapshot", Ability)]
    Slapshot,
    #[reward(0x0107, "Dodge Slash", Ability)]
    DodgeSlash,
    #[reward(0x022F, "Flash Step", Ability)]
    FlashStep,
    #[reward(0x0108, "Slide Dash", Ability)]
    SlideDash,
    #[reward(0x0232, "Vicinity Break", Ability)]
    VicinityBreak,
    #[reward(0x0109, "Guard Break", Ability)]
    GuardBreak,
    #[reward(0x010A, "Explosion", Ability)]
    Explosion,
    #[reward(0x010D, "Aerial Sweep", Ability)]
    AerialSweep,
    #[reward(0x0230, "Aerial Dive", Ability)]
    AerialDive,
    #[reward(0x010E, "Aerial Spiral", Ability)]
    AerialSpiral,
    #[reward(0x0110, "Aerial Finish", Ability)]
    AerialFinish,
    #[reward(0x0231, "Magnet Burst", Ability)]
    MagnetBurst,
    #[reward(0x010C, "Counterguard", Ability)]
    Counterguard,
    #[reward(0x0181, "Auto Valor", Ability)]
    AutoValor,
    #[reward(0x0182, "Auto Wisdom", Ability)]
    AutoWisdom,
    #[reward(0x0238, "Auto Limit", Ability)]
    AutoLimitForm,
    #[reward(0x0183, "Auto Master", Ability)]
    AutoMaster,
    #[reward(0x0184, "Auto Final", Ability)]
    AutoFinal,
    #[reward(0x0185, "Auto Summon", Ability)]
    AutoSummon,
    #[reward(0x00C6, "Trinity Limit", Ability)]
    TrinityLimit,
    // Donald
    #[reward(0x00A5, "Donald Fire", Ability)]
    DonaldFire,
    #[reward(0x00A6, "Donald Blizzard", Ability)]
    DonaldBlizzard,
    #[reward(0x00A7, "Donald Thunder", Ability)]
    DonaldThunder,
    #[reward(0x00A8, "Donald Cure", Ability)]
    DonaldCure,
    #[reward(0x00C7, "Fantasia (Comet)", Ability)]
    DonaldFantasia,
    #[reward(0x00C8, "Flare Force (Duck Flare)", Ability)]
    DonaldFlareForce,
    // Goofy
    #[reward(0x01A7, "Goofy Tornado", Ability)]
    GoofyTornado,
    #[reward(0x01AD, "Goofy Bash", Ability)]
    GoofyBash,
    #[reward(0x01A9, "Goofy Turbo", Ability)]
    GoofyTurbo,
    #[reward(0x00C9, "Tornado Fusion (Whirli-Goof)", Ability)]
    GoofyTornadoFusion,
    #[reward(0x00CA, "Teamwork (Knocksmash)", Ability)]
    GoofyTeamwork,
    // Support Abilities
    #[reward(0x008A, "Scan", Ability)]
    Scan,
    #[reward(0x009E, "Aerial Recovery", Ability)]
    AerialRecovery,
    #[reward(0x021B, "Combo Master", Ability)]
    ComboMaster,
    #[reward(0x00A2, "Combo Plus", Ability)]
    ComboPlus,
    #[reward(0x00A3, "Air Combo Plus", Ability)]
    AirComboPlus,
    #[reward(0x0186, "Combo Boost", Ability)]
    ComboBoost,
    #[reward(0x0187, "Air Combo Boost", Ability)]
    AirComboBoost,
    #[reward(0x0188, "Reaction Boost", Ability)]
    ReactionBoost,
    #[reward(0x0189, "Finishing Plus", Ability)]
    FinishingPlus,
    #[reward(0x018A, "Negative Combo", Ability)]
    NegativeCombo,
    #[reward(0x018B, "Berserk Charge", Ability)]
    BerserkCharge,
    #[reward(0x018C, "Damage Drive", Ability)]
    DamageDrive,
    #[reward(0x018D, "Drive Boost", Ability)]
    DriveBoost,
    #[reward(0x018E, "Form Boost", Ability)]
    FormBoost,
    #[reward(0x018F, "Summon Boost", Ability)]
    SummonBoost,
    #[reward(0x0190, "Combination Boost", Ability)]
    CombinationBoost,
    #[reward(0x0191, "Experience Boost", Ability)]
    ExperienceBoost,
    #[reward(0x0192, "Leaf Bracer", Ability)]
    LeafBracer,
    #[reward(0x0193, "Magic Lock-On", Ability)]
    MagicLockOn,
    #[reward(0x021D, "Light & Darkness", Ability)]
    LightAndDarkness,
    #[reward(0x0195, "Draw", Ability)]
    Draw,
    #[reward(0x0196, "Jackpot", Ability)]
    Jackpot,
    #[reward(0x0197, "Lucky Lucky", Ability)]
    LuckyLucky,
    #[reward(0x021C, "Drive Converter", Ability)]
    DriveConverter,
    #[reward(0x0198, "Fire Boost", Ability)]
    FireBoost,
    #[reward(0x0199, "Blizzard Boost", Ability)]
    BlizzardBoost,
    #[reward(0x019A, "Thunder Boost", Ability)]
    ThunderBoost,
    #[reward(0x019B, "Item Boost", Ability)]
    ItemBoost,
    #[reward(0x019C, "MP Rage", Ability)]
    MpRage,
    #[reward(0x019D, "MP Haste", Ability)]
    MpHaste,
    #[reward(0x01A5, "MP Hastera", Ability)]
    MpHastera,
    #[reward(0x01A6, "MP Hastega", Ability)]
    MpHastega,
    #[reward(0x019E, "Defender", Ability)]
    Defender,
    #[reward(0x021E, "Damage Control", Ability)]
    DamageControl,
    #[reward(0x019F, "Second Chance", Ability)]
    SecondChance,
    #[reward(0x01A0, "Once More", Ability)]
    OnceMore,
    #[reward(0x0194, "No Experience", Ability)]
    NoExperience,
    #[reward(0x01A1, "Auto Limit", Ability)]
    AutoLimit,
    #[reward(0x01A2, "Auto Change", Ability)]
    AutoChange,
    #[reward(0x01A3, "Hyper Healing", Ability)]
    HyperHealing,
    #[reward(0x01A4, "Auto Healing", Ability)]
    AutoHealing,
    #[reward(0x0254, "Protect", Ability)]
    Protect,
    #[reward(0x0255, "Protectra", Ability)]
    Protectra,
    #[reward(0x0256, "Protectga", Ability)]
    Protectga,
    // Growth Ability
    #[reward(0x005E, "High Jump LV1", Ability)]
    HighJumpOne,
    #[reward(0x005F, "High Jump LV2", Ability)]
    HighJumpTwo,
    #[reward(0x0060, "High Jump LV3", Ability)]
    HighJumpThree,
    #[reward(0x0061, "High Jump MAX", Ability)]
    HighJumpMax,
    #[reward(0x0062, "Quick Run LV1", Ability)]
    QuickRunOne,
    #[reward(0x0063, "Quick Run LV2", Ability)]
    QuickRunTwo,
    #[reward(0x0064, "Quick Run LV3", Ability)]
    QuickRunThree,
    #[reward(0x0065, "Quick Run MAX", Ability)]
    QuickRunMax,
    #[reward(0x0234, "Dodge Roll LV1", Ability)]
    DodgeRollOne,
    #[reward(0x0235, "Dodge Roll LV2", Ability)]
    DodgeRollTwo,
    #[reward(0x0236, "Dodge Roll LV3", Ability)]
    DodgeRollThree,
    #[reward(0x0237, "Dodge Roll MAX", Ability)]
    DodgeRollMax,
    #[reward(0x0066, "Aerial Dodge LV1", Ability)]
    AerialDodgeOne,
    #[reward(0x0067, "Aerial Dodge LV2", Ability)]
    AerialDodgeTwo,
    #[reward(0x0068, "Aerial Dodge LV3", Ability)]
    AerialDodgeThree,
    #[reward(0x0069, "Aerial Dodge MAX", Ability)]
    AerialDodgeMax,
    #[reward(0x006A, "Glide LV1", Ability)]
    GlideOne,
    #[reward(0x006B, "Glide LV2", Ability)]
    GlideTwo,
    #[reward(0x006C, "Glide LV3", Ability)]
    GlideThree,
    #[reward(0x006D, "Glide MAX", Ability)]
    GlideMax,

    // Accessories
    #[reward(0x0008, "Ability Ring", Accessory)]
    AbilityRing,
    #[reward(0x0009, "Engineer's Ring", Accessory)]
    EngineersRing,
    #[reward(0x000A, "Technician's Ring", Accessory)]
    TechniciansRing,
    #[reward(0x0026, "Skill Ring", Accessory)]
    SkillRing,
    #[reward(0x0027, "Skillful Ring", Accessory)]
    SkillfulRing,
    #[reward(0x000B, "Expert's Ring", Accessory)]
    ExpertsRing,
    #[reward(0x0022, "Master's Ring", Accessory)]
    MastersRing,
    #[reward(0x0034, "Cosmic Ring", Accessory)]
    CosmicRing,
    #[reward(0x0257, "Executive's Ring", Accessory)]
    ExecutivesRing,
    #[reward(0x000C, "Sardonyx Ring", Accessory)]
    SardonyxRing,
    #[reward(0x000D, "Tourmaline Ring", Accessory)]
    TournalineRing,
    #[reward(0x000E, "Aquamarine Ring", Accessory)]
    AquamarineRing,
    #[reward(0x00000F10, "Garnet Ring", Accessory)]
    GarnetRing,
    #[reward(0x0010, "Diamond Ring", Accessory)]
    DiamondRing,
    #[reward(0x0011, "Silver Ring", Accessory)]
    SilverRing,
    #[reward(0x0012, "Gold Ring", Accessory)]
    GoldRing,
    #[reward(0x0013, "Platinum Ring", Accessory)]
    PlatinumRing,
    #[reward(0x0014, "Mythril Ring", Accessory)]
    MythrilRing,
    #[reward(0x001C, "Orichalcum Ring", Accessory)]
    OrichalcumRing,
    #[reward(0x0028, "Soldier Earring", Accessory)]
    SoldierEarring,
    #[reward(0x002E, "Fencer Earring", Accessory)]
    FencerEarring,
    #[reward(0x002F, "Mage Earring", Accessory)]
    MageEarring,
    #[reward(0x0030, "Slayer Earring", Accessory)]
    SlayerEarring,
    #[reward(0x0035, "Medal", Accessory)]
    Medal,
    #[reward(0x0023, "Moon Amulet", Accessory)]
    MoonAmulet,
    #[reward(0x0024, "Star Charm", Accessory)]
    StarCharm,
    #[reward(0x0038, "Cosmic Arts", Accessory)]
    CosmicArts,
    #[reward(0x0039, "Shadow Archive", Accessory)]
    ShadowArchive,
    #[reward(0x003A, "Shadow Archive+", Accessory)]
    ShadowArchivePlus,
    #[reward(0x0040, "Full Bloom", Accessory)]
    FullBloom,
    #[reward(0x0042, "Full Bloom+", Accessory)]
    FullBloomPlus,
    #[reward(0x0041, "Draw Ring", Accessory)]
    DrawRing,
    #[reward(0x003F, "Lucky Ring", Accessory)]
    LuckyRing,

    // Armor
    #[reward(0x0043, "Elven Bandana", Armor)]
    ElvenBandana,
    #[reward(0x0044, "Divine Bandana", Armor)]
    DivineBandana,
    #[reward(0x004E, "Protect Belt", Armor)]
    ProtectBelt,
    #[reward(0x004F, "Gaia Belt", Armor)]
    GaiaBelt,
    #[reward(0x0045, "Power Band", Armor)]
    PowerBand,
    #[reward(0x0046, "Buster Band", Armor)]
    BusterBand,
    #[reward(0x006F, "Cosmic Belt", Armor)]
    CosmicBelt,
    #[reward(0x00AD, "Fire Bangle", Armor)]
    FireBangle,
    #[reward(0x00AE, "Fira Bangle", Armor)]
    FiraBangle,
    #[reward(0x00C5, "Firaga Bangle", Armor)]
    FiragaBangle,
    #[reward(0x011C, "Firagun Bangle", Armor)]
    FiragunBangle,
    #[reward(0x011E, "Blizzard Armlet", Armor)]
    BlizzardArmlet,
    #[reward(0x011F, "Blizzara Armlet", Armor)]
    BlizzaraArmlet,
    #[reward(0x0120, "Blizzaga Armlet", Armor)]
    BlizzagaArmlet,
    #[reward(0x0121, "Blizzagun Armlet", Armor)]
    BlizzagunArmlet,
    #[reward(0x0123, "Thunder Trinket", Armor)]
    ThunderTrinket,
    #[reward(0x0124, "Thundara Trinket", Armor)]
    ThundaraTrinket,
    #[reward(0x0125, "Thundaga Trinket", Armor)]
    ThundagaTrinket,
    #[reward(0x0126, "Thundagun Trinket", Armor)]
    ThundagunTrinket,
    #[reward(0x0084, "Shock Charm", Armor)]
    ShockCharm,
    #[reward(0x0085, "Shock Charm+", Armor)]
    ShockCharmPlus,
    #[reward(0x0128, "Shadow Anklet", Armor)]
    ShadowAnklet,
    #[reward(0x0129, "Dark Anklet", Armor)]
    DarkAnklet,
    #[reward(0x012A, "Midnight Anklet", Armor)]
    MidnightAnklet,
    #[reward(0x012B, "Chaos Anklet", Armor)]
    ChaosAnklet,
    #[reward(0x0131, "Champion Belt", Armor)]
    ChampionBelt,
    #[reward(0x012D, "Abas Chain", Armor)]
    AbasChain,
    #[reward(0x012E, "Aegis Chain", Armor)]
    AegisChain,
    #[reward(0x012F, "Acrisius", Armor)]
    Acrisius,
    #[reward(0x0133, "Acrisius+", Armor)]
    AcrisiusPlus,
    #[reward(0x0134, "Cosmic Chain", Armor)]
    CosmicChain,
    #[reward(0x0132, "Petite Ribbon", Armor)]
    PetiteRibbon,
    #[reward(0x0130, "Ribbon", Armor)]
    Ribbon,
    #[reward(0x009D, "Grand Ribbon", Armor)]
    GrandRibbon,

    // Bonus
    #[reward(0x05, "HP Up", BonusModifier)]
    HpUp,
    #[reward(0x0A, "MP Up", BonusModifier)]
    MpUp,
    #[reward(0x01, "Armor Slot Up", BonusModifier)]
    ArmorUp,
    #[reward(0x01, "Accessory Slot Up", BonusModifier)]
    AccessoryUp,
    #[reward(0x01, "Item Slot Up", BonusModifier)]
    ItemUp,
    #[reward(0x01, "Drive Gauge Up", BonusModifier)]
    DriveUp,

    // Form
    #[reward(0x001A, "Valor Form", Form)]
    ValorForm,
    #[reward(0x001B, "Wisdom Form", Form)]
    WisdomForm,
    #[reward(0x0233, "Limit Form", Form)]
    LimitForm,
    #[reward(0x001F, "Master Form", Form)]
    MasterForm,
    #[reward(0x001D, "Final Form", Form)]
    FinalForm,

    // Item
    #[reward(0x0001, "Potion", Item)]
    Potion,
    #[reward(0x0002, "Hi-Potion", Item)]
    HiPotion,
    #[reward(0x0003, "Ether", Item)]
    Ether,
    #[reward(0x0004, "Elixir", Item)]
    Elixir,
    #[reward(0x0005, "Mega-Potion", Item)]
    MegaPotion,
    #[reward(0x0006, "Mega-Ether", Item)]
    MegaEther,
    #[reward(0x0007, "Mega-Elixir", Item)]
    MegaElixir,
    #[reward(0x0083, "Tent", Item)]
    Tent,
    #[reward(0x0112, "Drive Recovery", Item)]
    DriveRecovery,
    #[reward(0x0113, "High Drive Recovery", Item)]
    HighDriveRecovery,
    #[reward(0x0114, "Power Boost", Item)]
    PowerBoost,
    #[reward(0x0115, "Magic Boost", Item)]
    MagicBoost,
    #[reward(0x0116, "Defense Boost", Item)]
    DefenseBoost,
    #[reward(0x0117, "AP Boost", Item)]
    ApBoost,

    // Key Item
    #[reward(0x0020, "Torn Page", TornPage)]
    TornPages,
    #[reward(0x016A, "Munny Pouch (Olette)", KeyItem)]
    MunnyPouchOlette,
    #[reward(0x0217, "Munny Pouch (Mickey)", KeyItem)]
    MunnyPouchMickey,
    #[reward(0x016B, "Crystal Orb", KeyItem)]
    CrystalOrb,
    #[reward(0x016C, "Seifer's Trophy", KeyItem)]
    SeifersTrophy,
    #[reward(0x016D, "Tournament Poster", KeyItem)]
    TournamentPoster,
    #[reward(0x016E, "Poster", KeyItem)]
    Poster,
    #[reward(0x016F, "Letter", KeyItem)]
    Letter,
    #[reward(0x0170, "Namine's Sketches", KeyItem)]
    NamineSketches,
    #[reward(0x0171, "Membership Card", KeyItem)]
    MembershipCard,
    #[reward(0x0172, "Olympus Stone", KeyItem)]
    OlympusStone,
    #[reward(0x0173, "Auron's Statue", KeyItem)]
    AuronsStatue,
    #[reward(0x0174, "Cursed Medallion", KeyItem)]
    CursedMedallion,
    #[reward(0x0175, "Presents", KeyItem)]
    Presents,
    #[reward(0x0176, "Decoy Presents", KeyItem)]
    DecoyPresents,
    #[reward(0x0177, "Ice Cream", KeyItem)]
    IceCream,
    #[reward(0x0178, "Picture", KeyItem)]
    Picture,
    #[reward(0x020C, "Promise Charm", KeyItem)]
    PromiseCharm,
    #[reward(0x0219, "Hades Cup Trophy", KeyItem)]
    HadesCupTrophy,
    #[reward(0x021A, r#""The Struggle" Trophy"#, KeyItem)]
    StruggleTrophy,

    // Keyblade
    #[reward(0x0029, "Kingdom Key", Keyblade)]
    KingdomKey,
    #[reward(0x002A, "Oathkeeper", Keyblade)]
    Oathkeeper,
    #[reward(0x002B, "Oblivion", Keyblade)]
    Oblivion,
    #[reward(0x01E0, "Star Seeker", Keyblade)]
    StarSeeker,
    #[reward(0x01E1, "Hidden Dragon", Keyblade)]
    HiddenDragon,
    #[reward(0x01E4, "Hero's Crest", Keyblade)]
    HerosCrest,
    #[reward(0x01E5, "Monochrome", Keyblade)]
    Monochrome,
    #[reward(0x01E6, "Follow the Wind", Keyblade)]
    FollowTheWind,
    #[reward(0x01E7, "Circle of Life", Keyblade)]
    CircleOfLife,
    #[reward(0x01E8, "Photon Debugger", Keyblade)]
    PhotonDebugger,
    #[reward(0x01E9, "Gull Wing", Keyblade)]
    GullWing,
    #[reward(0x01EA, "Rumbling Rose", Keyblade)]
    RumblingRose,
    #[reward(0x01EB, "Guardian Soul", Keyblade)]
    GuardianSoul,
    #[reward(0x01EC, "Wishing Lamp", Keyblade)]
    WishingLamp,
    #[reward(0x01ED, "Decisive Pumpkin", Keyblade)]
    DecisivePumpkin,
    #[reward(0x01EF, "Sweet Memories", Keyblade)]
    SweetMemories,
    #[reward(0x01F0, "Mysterious Abyss", Keyblade)]
    MysteriousAbyss,
    #[reward(0x01EE, "Sleeping Lion", Keyblade)]
    SleepingLion,
    #[reward(0x01F2, "Bond of Flame", Keyblade)]
    BondOfFlame,
    #[reward(0x021F, "Two Become One", Keyblade)]
    TwoBecomeOne,
    #[reward(0x01F1, "Fatal Crest", Keyblade)]
    FatalCrest,
    #[reward(0x01F3, "Fenrir", Keyblade)]
    Fenrir,
    #[reward(0x01F4, "Ultima Weapon", Keyblade)]
    UltimaWeapon,
    #[reward(0x0220, "Winner's Proof", Keyblade)]
    WinnersProof,
    #[reward(0x002C, "Detection Saber", Keyblade)]
    DetectionSaber,
    #[reward(0x002D, "Edge of Ultima", Keyblade)]
    EdgeOfUltima,

    // Map
    #[reward(0x0059, "Navigational Map", Map)]
    NavigationalMap,
    #[reward(0x0216, "DH Map", Map)]
    DHMap,
    #[reward(0x0215, "Tower Map", Map)]
    TowerMap,
    #[reward(0x00FF, "Twilight Town Map", Map)]
    TwilightTownMap,
    #[reward(0x0213, "Sunset Hill Map", Map)]
    SunsetHillMap,
    #[reward(0x0214, "Mansion Map", Map)]
    MansionMap,
    #[reward(0x0201, "Castle Perimeter Map", Map)]
    CastlePerimeterMap,
    #[reward(0x0202, "The Great Maw Map", Map)]
    TheGreatMawMap,
    #[reward(0x00FD, "Marketplace Map", Map)]
    MarketplaceMap,
    #[reward(0x024A, "Dark Remembrance Map", Map)]
    DarkRemembranceMap,
    #[reward(0x024E, "Depths of Remembrance Map", Map)]
    DepthsOfRemembranceMap,
    #[reward(0x0250, "Garden of Assemblage Map", Map)]
    GardenOfAssemblageMap,
    #[reward(0x005A, "Castle Map", Map)]
    CastleMap,
    #[reward(0x005B, "Basement Map", Map)]
    BasementMap,
    #[reward(0x005C, "Castle Walls Map", Map)]
    CastleWallsMap,
    #[reward(0x0087, "Underworld Map", Map)]
    UnderworldMap,
    #[reward(0x0088, "Caverns Map", Map)]
    CavernsMap,
    #[reward(0x0086, "Coliseum Map", Map)]
    ColiseumMap,
    #[reward(0x0079, "Cave of Wonders Map", Map)]
    CaveOfWondersMap,
    #[reward(0x007A, "Ruins Map", Map)]
    RuinsMap,
    #[reward(0x0078, "Agrabah Map", Map)]
    AgrabahMap,
    #[reward(0x0082, "Palace Map", Map)]
    PalaceMap,
    #[reward(0x0070, "Encampment Area Map", Map)]
    EncampmentAreaMap,
    #[reward(0x0071, "Village Area Map", Map)]
    VillageAreaMap,
    #[reward(0x007D, "100 Acre Wood Map", Map)]
    HundredAcreWoodMap,
    #[reward(0x007F, "Piglet's House Map", Map)]
    PigletsHouseMap,
    #[reward(0x007E, "Rabbit's House Map", Map)]
    RabbitsHouseMap,
    #[reward(0x0080, "Kanga's House Map", Map)]
    KangasHouseMap,
    #[reward(0x0081, "Spooky Cave Map", Map)]
    SpookyCaveMap,
    #[reward(0x007C, "Starry Hill Map", Map)]
    StarryHillMap,
    #[reward(0x0200, "Savannah Map", Map)]
    SavannahMap,
    #[reward(0x00FC, "Pride Rock Map", Map)]
    PrideRockMap,
    #[reward(0x01FF, "Oasis Map", Map)]
    OasisMap,
    #[reward(0x007B, "Undersea Kingdom Map", Map)]
    UnderseaKingdomMap,
    #[reward(0x0077, "Disney Castle Map", Map)]
    DisneyCastleMap,
    #[reward(0x0072, "Cornerstone Hill Map", Map)]
    CornerstoneHillMap,
    #[reward(0x0206, "Window of Time Map", Map)]
    WindowOfTimeMap,
    #[reward(0x0073, "Window of Time Map?", Map)]
    WindowOfTimeMapUnused,
    #[reward(0x0074, "Lilliput Map", Map)]
    LiliputMap,
    #[reward(0x0075, "Building Site Map", Map)]
    BuildingSiteMap,
    #[reward(0x0076, "Mickey's House Map", Map)]
    MickeysHouseMap,
    #[reward(0x00FA, "Halloween Town Map", Map)]
    HalloweenTownMap,
    #[reward(0x01FD, "Christmas Town Map", Map)]
    ChristmasTownMap,
    #[reward(0x01FE, "Curly Hill Map", Map)]
    CurlyHillMap,
    #[reward(0x00FB, "Naval Map", Map)]
    NavalMap,
    #[reward(0x01FB, "Isla de Muerta Map", Map)]
    IslaDeMuertaMap,
    #[reward(0x01FC, "Ship Graveyard Map", Map)]
    ShipGraveyardMap,
    #[reward(0x01F9, "The Interceptor Map", Map)]
    TheInterceptorMap,
    #[reward(0x01FA, "The Black Pearl Map", Map)]
    TheBlackPearlMap,
    #[reward(0x00FE, "Pit Cell Area Map", Map)]
    PitCellAreaMap,
    #[reward(0x0203, "I/O Tower Map", Map)]
    IoTowerMap,
    #[reward(0x0204, "Central Computer Core Map", Map)]
    CentralComputerCoreMap,
    #[reward(0x0205, "Solar Sailer Simulation Map", Map)]
    SolarSailerSimulationMap,
    #[reward(0x0100, "Dark City Map", Map)]
    DarkCityMap,
    #[reward(0x0218, "Castle That Never Was Map", Map)]
    CastleThatNeverWasMap,

    // Proof
    #[reward(0x0251, "Proof of Connection", Proof)]
    ProofOfConnection,
    #[reward(0x0252, "Proof of Nonexistence", Proof)]
    ProofOfNonexistence,
    #[reward(0x0253, "Proof of Peace", Proof)]
    ProofOfPeace,

    // Recipe
    #[reward(0x017E, "Mega-Recipe", Recipe)]
    MegaRecipe,
    #[reward(0x01C1, "Star Recipe", Recipe)]
    StarRecipe,
    #[reward(0x01C2, "Recovery Recipe", Recipe)]
    RecoveryRecipe,
    #[reward(0x01C3, "Skill Recipe", Recipe)]
    SkillRecipe,
    #[reward(0x01C4, "Guard Recipe", Recipe)]
    GuardRecipe,
    #[reward(0x01D0, "Road to Discovery", Recipe)]
    RoadToDiscovery,
    #[reward(0x01D1, "Strength Beyond Strength", Recipe)]
    StrengthBeyondStrength,
    #[reward(0x01D2, "Book of Shadows", Recipe)]
    BookOfShadows,
    #[reward(0x01D3, "Cloaked Thunder", Recipe)]
    CloakedThunder,
    #[reward(0x01D4, "Eternal Blossom", Recipe)]
    EternalBlossom,
    #[reward(0x01D5, "Rare Document", Recipe)]
    RareDocument,
    #[reward(0x01DB, "Style Recipe", Recipe)]
    StyleRecipe,
    #[reward(0x01DC, "Moon Recipe", Recipe)]
    MoonRecipe,
    #[reward(0x01DD, "Queen Recipe", Recipe)]
    QueenRecipe,
    #[reward(0x01DE, "King Recipe", Recipe)]
    KingRecipe,
    #[reward(0x01DF, "Ultimate Recipe", Recipe)]
    UltimateRecipe,

    // Report
    #[reward(0x00E2, "Secret Ansem's Report 1", Report)]
    Report1,
    #[reward(0x00E3, "Secret Ansem's Report 2", Report)]
    Report2,
    #[reward(0x00E4, "Secret Ansem's Report 3", Report)]
    Report3,
    #[reward(0x00E5, "Secret Ansem's Report 4", Report)]
    Report4,
    #[reward(0x00E6, "Secret Ansem's Report 5", Report)]
    Report5,
    #[reward(0x00E7, "Secret Ansem's Report 6", Report)]
    Report6,
    #[reward(0x00E8, "Secret Ansem's Report 7", Report)]
    Report7,
    #[reward(0x00E9, "Secret Ansem's Report 8", Report)]
    Report8,
    #[reward(0x00EA, "Secret Ansem's Report 9", Report)]
    Report9,
    #[reward(0x00EB, "Secret Ansem's Report 10", Report)]
    Report10,
    #[reward(0x00EC, "Secret Ansem's Report 11", Report)]
    Report11,
    #[reward(0x00ED, "Secret Ansem's Report 12", Report)]
    Report12,
    #[reward(0x00EE, "Secret Ansem's Report 13", Report)]
    Report13,

    // Shield
    #[reward(0x0031, "Knight's Shield", Shield)]
    KnightsShield,
    #[reward(0x008B, "Adamant Shield", Shield)]
    AdamantShield,
    #[reward(0x008C, "Chain Gear", Shield)]
    ChainShield,
    #[reward(0x008E, "Falling Star", Shield)]
    FallingStar,
    #[reward(0x008F, "Dream Cloud", Shield)]
    DreamCloud,
    #[reward(0x0090, "Knight Defender", Shield)]
    KnightDefender,
    #[reward(0x008D, "Ogre Shield", Shield)]
    OgreShield,
    #[reward(0x0091, "Genji Shield", Shield)]
    GenjiShield,
    #[reward(0x0092, "Akashic Record", Shield)]
    AkashicRecord,
    #[reward(0x0259, "Akashic Record+", Shield)]
    AkashicRecordPlus,
    #[reward(0x0093, "Nobody Guard", Shield)]
    NobodyGuard,
    #[reward(0x0228, "Frozen Pride", Shield)]
    FrozenPride,
    #[reward(0x0229, "Frozen Pride+", Shield)]
    FrozenPridePlus,
    #[reward(0x01E3, "Save The King", Shield)]
    SaveTheKing,
    #[reward(0x01F8, "Save The King+", Shield)]
    SaveTheKingPlus,
    #[reward(0x022A, "Joyous Mushroom", Shield)]
    JoyousMushroom,
    #[reward(0x022B, "Joyous Mushroom+", Shield)]
    JoyousMushroomPlus,
    #[reward(0x022C, "Majestic Mushroom", Shield)]
    MajesticMushroom,
    #[reward(0x022D, "Majestic Mushroom+", Shield)]
    MajesticMushroomPlus,
    #[reward(0x022E, "Ultimate Mushroom", Shield)]
    UltimateMushroom,
    #[reward(0x0032, "Detection Shield", Shield)]
    DetectionShield,
    #[reward(0x0033, "Test The King", Shield)]
    TestTheKing,

    // Spell
    #[reward(0x0015, "Fire", Spell)]
    Fire,
    #[reward(0x0016, "Blizzard", Spell)]
    Blizzard,
    #[reward(0x0017, "Thunder", Spell)]
    Thunder,
    #[reward(0x0018, "Cure", Spell)]
    Cure,
    #[reward(0x0057, "Magnet", Spell)]
    Magnet,
    #[reward(0x0058, "Reflect", Spell)]
    Reflect,

    // Staff
    #[reward(0x004B, "Mage's Staff", Staff)]
    MagesStaff,
    #[reward(0x0094, "Hammer Staff", Staff)]
    HammerStaff,
    #[reward(0x0095, "Victory Bell", Staff)]
    VictoryBell,
    #[reward(0x0097, "Comet Staff", Staff)]
    CometStaff,
    #[reward(0x0098, "Lord's Broom", Staff)]
    LordsBroom,
    #[reward(0x0099, "Wisdom Wand", Staff)]
    WisdomWand,
    #[reward(0x0096, "Meteor Staff", Staff)]
    MeteorStaff,
    #[reward(0x009A, "Rising Dragon", Staff)]
    RisingDragon,
    #[reward(0x009C, "Shaman's Relic", Staff)]
    ShamansRelic,
    #[reward(0x0258, "Shaman's Relic+", Staff)]
    ShamansRelicPlus,
    #[reward(0x009B, "Nobody Lance", Staff)]
    NobodyLance,
    #[reward(0x0221, "Centurion", Staff)]
    Centurion,
    #[reward(0x0222, "Centurion+", Staff)]
    CenturionPlus,
    #[reward(0x01E2, "Save The Queen", Staff)]
    SaveTheQueen,
    #[reward(0x01F7, "Save The Queen+", Staff)]
    SaveTheQueenPlus,
    #[reward(0x0223, "Plain Mushroom", Staff)]
    PlainMushroom,
    #[reward(0x0224, "Plain Mushroom+", Staff)]
    PlainMushroomPlus,
    #[reward(0x0225, "Precious Mushroom", Staff)]
    PreciousMushroom,
    #[reward(0x0226, "Precious Mushroom+", Staff)]
    PreciousMushroomPlus,
    #[reward(0x0227, "Premium Mushroom", Staff)]
    PremiumMushroom,
    #[reward(0x00A1, "Staff of Detection", Staff)]
    StaffOfDetection,

    // Summon
    #[reward(0x017F, "Baseball Charm (Chicken Little)", Summon)]
    BaseballCharm,
    #[reward(0x0019, "Ukulele Charm (Stitch)", Summon)]
    UkeleleCharm,
    #[reward(0x009F, "Lamp Charm (Genie)", Summon)]
    LampCharm,
    #[reward(0x00A0, "Feather Charm (Peter Pan)", Summon)]
    FeatherCharm,

    // Synth Material
    #[reward(0x013D, "Blazing Shard", SynthesisMaterial)]
    BlazingShard,
    #[reward(0x013E, "Blazing Stone", SynthesisMaterial)]
    BlazingStone,
    #[reward(0x013F, "Blazing Gem", SynthesisMaterial)]
    BlazingGem,
    #[reward(0x0140, "Blazing Crystal", SynthesisMaterial)]
    BlazingCrystal,
    #[reward(0x017A, "Frost Shard", SynthesisMaterial)]
    FrostShard,
    #[reward(0x017B, "Frost Stone", SynthesisMaterial)]
    FrostStone,
    #[reward(0x017C, "Frost Gem", SynthesisMaterial)]
    FrostGem,
    #[reward(0x017D, "Frost Crystal", SynthesisMaterial)]
    FrostCrystal,
    #[reward(0x0145, "Lightning Shard", SynthesisMaterial)]
    LightningShard,
    #[reward(0x0146, "Lightning Stone", SynthesisMaterial)]
    LightningStone,
    #[reward(0x0147, "Lightning Gem", SynthesisMaterial)]
    LightningGem,
    #[reward(0x0148, "Lightning Crystal", SynthesisMaterial)]
    LightningCrystal,
    #[reward(0x014D, "Lucid Shard", SynthesisMaterial)]
    LucidShard,
    #[reward(0x014E, "Lucid Stone", SynthesisMaterial)]
    LucidStone,
    #[reward(0x014F, "Lucid Gem", SynthesisMaterial)]
    LucidGem,
    #[reward(0x0150, "Lucid Crystal", SynthesisMaterial)]
    LucidCrystal,
    #[reward(0x0149, "Power Shard", SynthesisMaterial)]
    PowerShard,
    #[reward(0x014A, "Power Stone", SynthesisMaterial)]
    PowerStone,
    #[reward(0x014B, "Power Gem", SynthesisMaterial)]
    PowerGem,
    #[reward(0x014C, "Power Crystal", SynthesisMaterial)]
    PowerCrystal,
    #[reward(0x0118, "Dark Shard", SynthesisMaterial)]
    DarkShard,
    #[reward(0x0119, "Dark Stone", SynthesisMaterial)]
    DarkStone,
    #[reward(0x011A, "Dark Gem", SynthesisMaterial)]
    DarkGem,
    #[reward(0x011B, "Dark Crystal", SynthesisMaterial)]
    DarkCrystal,
    #[reward(0x0151, "Dense Shard", SynthesisMaterial)]
    DenseShard,
    #[reward(0x0152, "Dense Stone", SynthesisMaterial)]
    DenseStone,
    #[reward(0x0153, "Dense Gem", SynthesisMaterial)]
    DenseGem,
    #[reward(0x0154, "Dense Crystal", SynthesisMaterial)]
    DenseCrystal,
    #[reward(0x0155, "Twilight Shard", SynthesisMaterial)]
    TwilightShard,
    #[reward(0x0156, "Twilight Stone", SynthesisMaterial)]
    TwilightStone,
    #[reward(0x0157, "Twilight Gem", SynthesisMaterial)]
    TwilightGem,
    #[reward(0x0158, "Twilight Crystal", SynthesisMaterial)]
    TwilightCrystal,
    #[reward(0x0159, "Mythril Shard", SynthesisMaterial)]
    MythrilShard,
    #[reward(0x015A, "Mythril Stone", SynthesisMaterial)]
    MythrilStone,
    #[reward(0x015B, "Mythril Gem", SynthesisMaterial)]
    MythrilGem,
    #[reward(0x015C, "Mythril Crystal", SynthesisMaterial)]
    MythrilCrystal,
    #[reward(0x0240, "Remembrance Shard", SynthesisMaterial)]
    RemembranceShard,
    #[reward(0x0241, "Remembrance Stone", SynthesisMaterial)]
    RemembranceStone,
    #[reward(0x0242, "Remembrance Gem", SynthesisMaterial)]
    RemembranceGem,
    #[reward(0x0243, "Remembrance Crystal", SynthesisMaterial)]
    RemembranceCrystal,
    #[reward(0x0244, "Tranquility Shard", SynthesisMaterial)]
    TranquilityShard,
    #[reward(0x0245, "Tranquility Stone", SynthesisMaterial)]
    TranquilityStone,
    #[reward(0x0246, "Tranquility Gem", SynthesisMaterial)]
    TranquilityGem,
    #[reward(0x0247, "Tranquility Crystal", SynthesisMaterial)]
    TranquilityCrystal,
    #[reward(0x015D, "Bright Shard", SynthesisMaterial)]
    BrightShard,
    #[reward(0x015E, "Bright Stone", SynthesisMaterial)]
    BrightStone,
    #[reward(0x015F, "Bright Gem", SynthesisMaterial)]
    BrightGem,
    #[reward(0x0160, "Bright Crystal", SynthesisMaterial)]
    BrightCrystal,
    #[reward(0x0161, "Energy Shard", SynthesisMaterial)]
    EnergyShard,
    #[reward(0x0162, "Energy Stone", SynthesisMaterial)]
    EnergyStone,
    #[reward(0x0163, "Energy Gem", SynthesisMaterial)]
    EnergyGem,
    #[reward(0x0164, "Energy Crystal", SynthesisMaterial)]
    EnergyCrystal,
    #[reward(0x0165, "Serenity Shard", SynthesisMaterial)]
    SerenityShard,
    #[reward(0x0166, "Serenity Stone", SynthesisMaterial)]
    SerenityStone,
    #[reward(0x0167, "Serenity Gem", SynthesisMaterial)]
    SerenityGem,
    #[reward(0x0168, "Serenity Crystal", SynthesisMaterial)]
    SerenityCrystal,
    #[reward(0x0248, "Lost Illusion", SynthesisMaterial)]
    LostIllusion,
    #[reward(0x0249, "Manifest Illusion", SynthesisMaterial)]
    ManifestIllusion,
    #[reward(0x0179, "Orichalcum", SynthesisMaterial)]
    Orichalcum,
    #[reward(0x0169, "Orichalcum+", SynthesisMaterial)]
    OrichalcumPlus,
}
