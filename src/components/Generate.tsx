import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel, {
	FormControlLabelProps,
} from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { api } from "../api";
import { Configuration, GameMode } from "../Configuration";
import { PickByType } from "../PickByType";

interface TCheckbox extends Omit<FormControlLabelProps, "control"> {
	label: string;
	name: string;
	checked: boolean;
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
	worldsWrapper: {
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
		marginTop: theme.spacing(3),
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
		level50: false,
		donaldAbilities: true,
		goofyAbilities: true,
		formAbilities: true,

		simulatedTwilightTown: true,
		twilightTown: true,
		hollowBastion: true,
		cavernOfRemembrance: true,
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

	const onCheckboxChange = useCallback(
		({ target: { name, checked } }: React.ChangeEvent<HTMLInputElement>) => {
			setCheckbox(current => {
				if (name === "abilities" && !checked) {
					return {
						...current,
						abilities: false,
						level50: false,
					};
				}

				return {
					...current,
					[name]: checked,
				};
			});
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
			setCheckbox(current => ({
				...current,
				[name]: !current[name],
			}));
		},
		[]
	);

	const CheckBox = useCallback(
		({ label, name, checked, ...props }: TCheckbox) => (
			<div>
				<FormControlLabel
					label={label}
					control={
						<Switch
							name={name}
							checked={checked}
							onChange={onCheckboxChange}
							color="primary"
						/>
					}
					{...props}
				/>
			</div>
		),
		[onCheckboxChange]
	);

	const WorldChip = useCallback(
		({ label, name, checked }: TCheckbox) => (
			<Chip
				label={label}
				color={checked ? "primary" : "default"}
				onClick={onChipClick(name)}
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
						label="Seed (defaults to current time)"
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

				<div className={classes.marginBottom}>
					<CheckBox
						label="Critical Mode"
						name="criticalMode"
						checked={checkbox.criticalMode}
					/>

					<CheckBox
						label="Randomize Stats"
						name="stats"
						checked={checkbox.stats}
					/>

					<CheckBox
						label="Randomize Abilities"
						name="abilities"
						checked={checkbox.abilities}
					/>

					<CheckBox
						label="Cap abilities at level 50 (KH3 style)"
						name="level50"
						checked={checkbox.level50}
						disabled={!checkbox.abilities}
					/>

					<CheckBox
						label="Randomize Donald's Abilities"
						name="donaldAbilities"
						checked={checkbox.donaldAbilities}
					/>

					<CheckBox
						label="Randomize Goofy's Abilities"
						name="goofyAbilities"
						checked={checkbox.goofyAbilities}
					/>

					<CheckBox
						label="Randomize Form Abilities"
						name="formAbilities"
						checked={checkbox.formAbilities}
					/>
				</div>

				<div className={classes.worldsWrapper}>
					<WorldChip
						label="Simulated Twilight Town"
						name="simulatedTwilightTown"
						checked={checkbox.simulatedTwilightTown}
					/>

					<WorldChip
						label="Twilight Town"
						name="twilightTown"
						checked={checkbox.twilightTown}
					/>

					<WorldChip
						label="Hollow Bastion"
						name="hollowBastion"
						checked={checkbox.hollowBastion}
					/>

					<WorldChip
						label="Cavern of Remembrance"
						name="cavernOfRemembrance"
						checked={checkbox.cavernOfRemembrance}
					/>

					<WorldChip
						label="Beast's Castle"
						name="beastsCastle"
						checked={checkbox.beastsCastle}
					/>

					<WorldChip
						label="Olympus Colisseum"
						name="olympus"
						checked={checkbox.olympus}
					/>

					<WorldChip
						label="Agrabah"
						name="agrabah"
						checked={checkbox.agrabah}
					/>

					<WorldChip
						label="Land of Dragons"
						name="landOfDragons"
						checked={checkbox.landOfDragons}
					/>

					<WorldChip
						label="100 Acre Wood"
						name="pooh"
						checked={checkbox.pooh}
					/>

					<WorldChip
						label="Atlantica"
						name="atlantica"
						checked={checkbox.atlantica}
					/>

					<WorldChip
						label="Pride Lands"
						name="prideLands"
						checked={checkbox.prideLands}
					/>

					<WorldChip
						label="Disne's Castle"
						name="disneyCastle"
						checked={checkbox.disneyCastle}
					/>

					<WorldChip
						label="Timeless River"
						name="timelessRiver"
						checked={checkbox.timelessRiver}
					/>

					<WorldChip
						label="Halloween Town"
						name="halloweenTown"
						checked={checkbox.halloweenTown}
					/>

					<WorldChip
						label="Port Royal"
						name="portRoyal"
						checked={checkbox.portRoyal}
					/>

					<WorldChip
						label="Space Paranoids"
						name="spaceParanoids"
						checked={checkbox.spaceParanoids}
					/>

					<WorldChip
						label="The World That Never Was"
						name="twtnw"
						checked={checkbox.twtnw}
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
