#[derive(Debug)]
pub struct Configuration<'a> {
    // Settings
    seed: &'a str,
    game_mode: GameMode,
    critical_mode: bool,
    leveling: Leveling,
    level_up_abilities: RandomizeMode,
    level_up_bonus_modifiers: bool,
    level_up_stats: bool,
    exp_multipliers: ExpMultipliers,
    keyblade_stats: KeybladeStats,
    keyblade_abilities: KeybladeAbilities,
    ansems_reports_depth: AnsemsReportsDepth,
    // Worlds
    worlds: Worlds,
    // Include
    donald_abilities: bool,
    goofy_abilities: bool,
    absent_silhouettes: RandomizeMode,
    data_organization_xiii: RandomizeMode,
    olympus_cups: RandomizeMode,
    hades_cup: bool,
    lingering_will: bool,
    sephiroth: bool,
    ultima_weapon: bool,
    final_form: bool,
    form_abilities: RandomizeMode,
    form_growth_abilities: RandomizeMode,
    form_max_growth_abilities: bool,
    synthesis_rewards: bool,
    // Patches
    patches: Patches,
}

#[derive(Debug, Default)]
pub enum GameMode {
    BaseGame,
    #[default]
    GardenOfAssemblageMod,
}

#[derive(Debug, Default)]
pub enum Leveling {
    One,
    #[default]
    Fifty,
    NinetyNine,
}

#[derive(Debug, Default)]
pub enum RandomizeMode {
    Vanilla,
    Replace,
    #[default]
    Randomize,
}

#[derive(Debug, Default)]
pub enum KeybladeStats {
    Vanilla,
    #[default]
    Balanced,
    Boosted,
}

#[derive(Debug, Default)]
pub enum KeybladeAbilities {
    Vanilla,
    #[default]
    Support,
    ActionSupport,
}

#[derive(Debug, Default)]
pub enum AnsemsReportsDepth {
    FirstVisits,
    SecondVisits,
    #[default]
    Datas,
}

#[derive(Debug)]
pub struct ExpMultipliers {
    sora: f32,
    valor_form: f32,
    wisdom_form: f32,
    limit_form: f32,
    master_form: f32,
    final_form: f32,
}

impl Default for ExpMultipliers {
    fn default() -> Self {
        Self {
            sora: 1.0,
            valor_form: 1.0,
            wisdom_form: 1.0,
            limit_form: 1.0,
            master_form: 1.0,
            final_form: 1.0,
        }
    }
}

#[derive(Debug)]
pub struct Worlds {
    simulated_twilight_town: RandomizeMode,
    twilight_town: RandomizeMode,
    hollow_bastion: RandomizeMode,
    cavern_of_remembrance: RandomizeMode,
    beasts_castle: RandomizeMode,
    olympus: RandomizeMode,
    agrabah: RandomizeMode,
    land_of_dragons: RandomizeMode,
    hundred_acre_wood: RandomizeMode,
    atlantica: RandomizeMode,
    pride_lands: RandomizeMode,
    disney_castle: RandomizeMode,
    timeless_river: RandomizeMode,
    halloween_town: RandomizeMode,
    port_royal: RandomizeMode,
    space_paranoids: RandomizeMode,
    the_world_that_never_was: RandomizeMode,
}

#[derive(Debug)]
pub struct Patches {
    shorter_day_five: bool,
    faster_oogie: bool,
    faster_presents: bool,
    early_lion_dash: bool,
    fast_hyenas_two: bool,
    skip_dragon: bool,
}
