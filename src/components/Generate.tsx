import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { api } from "../api";
import { Configuration, GameMode } from "../Configuration";
import { PickByType } from "../PickByType";

interface TChip {
	label: string;
	name: string;
	checked: boolean;
	disabled?: boolean;
}

const useStyles = makeStyles(theme => ({
	paper: {
		margin: theme.spacing(3),
		marginLeft: "auto",
		marginRight: "auto",
		padding: theme.spacing(3),
		width: "50%",
	},
	marginBottom: {
		marginBottom: theme.spacing(3),
	},
	chipsWrapper: {
		marginBottom: theme.spacing(3),
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(0.5),
		},
	},
	buttonWrapper: {
		textAlign: "center",
	},
	button: {
		width: "75%",
	},
}));

export const Generate: React.FC<RouteComponentProps> = ({ history }) => {
	const classes = useStyles();

	const [loading, setLoading] = useState(false);

	const [text, setText] = useState<PickByType<Configuration, string>>({
		seed: "",
	});
	const [checkbox, setCheckbox] = useState<PickByType<Configuration, boolean>>({
		stats: true,
		criticalMode: true,
		abilities: true,
		level50: true,
		level1: false,
		donaldAbilities: true,
		goofyAbilities: true,
		formAbilities: true,

		simulatedTwilightTown: true,
		twilightTown: true,
		hollowBastion: true,
		cavernOfRemembrance: true,
		organizationXIII: true,
		beastsCastle: true,
		olympus: true,
		agrabah: true,
		landOfDragons: true,
		pooh: true,
		atlantica: true,
		prideLands: true,
		disneyCastle: true,
		timelessRiver: true,
		halloweenTown: true,
		portRoyal: true,
		spaceParanoids: true,
		twtnw: true,

		ultimaWeapon: true,
		finalForm: true,
		synthItems: true,
	});
	const [gameMode, setGameMode] = useState<GameMode>(GameMode.GOA_MOD);

	const onTextChange = useCallback(
		({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
			setText(current => ({
				...current,
				[name]: value,
			}));
		},
		[]
	);

	const onGameModeChange = useCallback(
		(
			event: React.ChangeEvent<{
				name?: string | undefined;
				value: unknown;
			}>
		) => {
			setGameMode(event.target.value as GameMode);
		},
		[]
	);

	const onChipClick = useCallback(
		(name: string) => () => {
			setCheckbox(current => {
				if (name === "abilities" && current.abilities) {
					return {
						...current,
						abilities: false,
						level50: false,
					};
				}

				if (name === "level1" && !current.level1) {
					return {
						...current,
						level50: false,
						level1: true,
					};
				} else if (name === "level50" && !current.level50) {
					return {
						...current,
						level50: true,
						level1: false,
					};
				}

				return {
					...current,
					[name]: !current[name],
				};
			});
		},
		[]
	);

	const OptionChip = useCallback(
		({ label, name, checked, disabled }: TChip) => (
			<Chip
				label={label}
				color={checked ? "primary" : "default"}
				onClick={onChipClick(name)}
				disabled={disabled}
			/>
		),
		[onChipClick]
	);

	const onSubmit = useCallback(
		async (event: React.FormEvent<HTMLFormElement>) => {
			try {
				event.preventDefault();

				setLoading(true);

				const enabled = Object.entries(checkbox)
					.filter(([_, value]) => value)
					.reduce((result, [key, value]) => ({ ...result, [key]: value }), {});

				const response = await axios.post<{ seed: string }>(`${api}/seed`, {
					...text,
					...enabled,
					gameMode,
				});

				history.push(`/seed/${response.data.seed}`);
			} catch (error) {
				console.error(error);

				setLoading(false);
			}
		},
		[text, checkbox, gameMode, history]
	);

	return (
		<Paper className={classes.paper}>
			<form noValidate onSubmit={onSubmit}>
				<div className={classes.marginBottom}>
					<TextField
						name="seed"
						value={text.seed}
						label="Click to set a seed (defaults to random bytes)"
						onChange={onTextChange}
						fullWidth
					/>
				</div>

				<div className={classes.marginBottom}>
					<FormControl variant="outlined" fullWidth disabled>
						<InputLabel>Game Mode</InputLabel>
						<Select
							value={gameMode}
							onChange={onGameModeChange}
							label="Game Mode"
						>
							<MenuItem value={GameMode.BASE_GAME}>Base Game</MenuItem>
							<MenuItem value={GameMode.GOA_MOD}>
								Garden of Assemblage Mod
							</MenuItem>
						</Select>
					</FormControl>
				</div>

				<Typography align="center">Randomize</Typography>

				<div className={classes.chipsWrapper}>
					<OptionChip label="Stats" name="stats" checked={checkbox.stats} />

					<OptionChip
						label="Abilities"
						name="abilities"
						checked={checkbox.abilities}
					/>

					<OptionChip
						label="Cap abilities at Level 50"
						name="level50"
						checked={checkbox.level50}
						disabled={!checkbox.abilities}
					/>

					<OptionChip label="Level 1" name="level1" checked={checkbox.level1} />

					<OptionChip
						label="Donald's Abilities"
						name="donaldAbilities"
						checked={checkbox.donaldAbilities}
					/>

					<OptionChip
						label="Goofy's Abilities"
						name="goofyAbilities"
						checked={checkbox.goofyAbilities}
					/>

					<OptionChip
						label="Form Abilities"
						name="formAbilities"
						checked={checkbox.formAbilities}
					/>
				</div>

				<Typography align="center">Worlds</Typography>

				<div className={classes.chipsWrapper}>
					<OptionChip
						label="Simulated Twilight Town"
						name="simulatedTwilightTown"
						checked={checkbox.simulatedTwilightTown}
					/>

					<OptionChip
						label="Twilight Town"
						name="twilightTown"
						checked={checkbox.twilightTown}
					/>

					<OptionChip
						label="Hollow Bastion"
						name="hollowBastion"
						checked={checkbox.hollowBastion}
					/>

					<OptionChip
						label="Cavern of Remembrance"
						name="cavernOfRemembrance"
						checked={checkbox.cavernOfRemembrance}
					/>

					<OptionChip
						label="Beast's Castle"
						name="beastsCastle"
						checked={checkbox.beastsCastle}
					/>

					<OptionChip
						label="Olympus Coliseum"
						name="olympus"
						checked={checkbox.olympus}
					/>

					<OptionChip
						label="Agrabah"
						name="agrabah"
						checked={checkbox.agrabah}
					/>

					<OptionChip
						label="Land of Dragons"
						name="landOfDragons"
						checked={checkbox.landOfDragons}
					/>

					<OptionChip
						label="100 Acre Wood"
						name="pooh"
						checked={checkbox.pooh}
					/>

					<OptionChip
						label="Atlantica"
						name="atlantica"
						checked={checkbox.atlantica}
					/>

					<OptionChip
						label="Pride Lands"
						name="prideLands"
						checked={checkbox.prideLands}
					/>

					<OptionChip
						label="Disney Castle"
						name="disneyCastle"
						checked={checkbox.disneyCastle}
					/>

					<OptionChip
						label="Timeless River"
						name="timelessRiver"
						checked={checkbox.timelessRiver}
					/>

					<OptionChip
						label="Halloween Town"
						name="halloweenTown"
						checked={checkbox.halloweenTown}
					/>

					<OptionChip
						label="Port Royal"
						name="portRoyal"
						checked={checkbox.portRoyal}
					/>

					<OptionChip
						label="Space Paranoids"
						name="spaceParanoids"
						checked={checkbox.spaceParanoids}
					/>

					<OptionChip
						label="The World That Never Was"
						name="twtnw"
						checked={checkbox.twtnw}
					/>
				</div>

				<Typography align="center">Include</Typography>

				<div className={classes.chipsWrapper}>
					<OptionChip
						label="Critical Mode"
						name="criticalMode"
						checked={checkbox.criticalMode}
					/>

					<OptionChip
						label="Data Org/Absent Silhouettes"
						name="organizationXIII"
						checked={checkbox.organizationXIII}
					/>

					<OptionChip
						label="Ultima Weapon"
						name="ultimaWeapon"
						checked={checkbox.ultimaWeapon}
					/>

					<OptionChip
						label="Final Form"
						name="finalForm"
						checked={checkbox.finalForm}
					/>

					<OptionChip
						label="Synth Items"
						name="synthItems"
						checked={checkbox.synthItems}
					/>
				</div>

				<div className={classes.buttonWrapper}>
					<Button
						type="submit"
						disabled={loading}
						className={classes.button}
						color="primary"
						variant="contained"
					>
						{loading ? "Generating seed..." : "Generate seed"}
					</Button>
				</div>
			</form>
		</Paper>
	);
};
