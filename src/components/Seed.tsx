import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import downloadjs from "downloadjs";
import React, { useCallback, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { api } from "../api";
import { Configuration, GameMode } from "../Configuration";
import { createPnach } from "../helpers/createPnach";
import { Reward } from "../Reward";
import { RewardLocation } from "../RewardLocation";
import { SeedArray } from "../SeedArray";

const ConfigProperty: React.FC<{ property: boolean }> = ({
	property,
	children,
}) => {
	return property ? <Typography>{children}</Typography> : null;
};

const SpoilerLogRow: React.FC<{ reward: Reward; location: RewardLocation }> = ({
	reward,
	location,
}) => {
	return location.description && reward ? (
		<TableRow>
			<TableCell>{location.description}</TableCell>
			<TableCell>{location.type}</TableCell>
			<TableCell colSpan={location.reward.name ? 1 : 2}>
				{reward.name}
			</TableCell>
			{location.reward.name ? (
				<TableCell>{location.reward.name}</TableCell>
			) : null}
		</TableRow>
	) : null;
};

const useStyles = makeStyles(theme => {
	const paper: CSSProperties = {
		margin: theme.spacing(3),
		marginLeft: "auto",
		marginRight: "auto",
		padding: theme.spacing(3),
		width: "50%",
		textAlign: "center",
	};

	return createStyles({
		paper,
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
				marginLeft: theme.spacing(1.5),
				marginRight: theme.spacing(1.5),
			},
		},
		button: {
			marginTop: theme.spacing(3),
			width: "75%",
		},
		spoilerPaper: {
			...paper,
			width: "auto",
		},
		loadingContainer: {
			paddingTop: theme.spacing(20),
			textAlign: "center",
		},
	});
});

export const Seed: React.FC<RouteComponentProps<{ seed: string }>> = ({
	match: {
		params: { seed },
	},
}) => {
	const classes = useStyles();

	const [configuration, setConfiguration] = useState<Configuration | null>(
		null
	);
	const [seedArray, setSeedArray] = useState<SeedArray | null>(null);

	const [spoilerLogs, setSpoilerLogs] = useState(false);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		(async function () {
			try {
				const { data } = await axios.get<{
					configuration: Configuration;
					seed: SeedArray;
				}>(`${api}/seed/${seed}`);

				setConfiguration(data.configuration);
				setSeedArray(data.seed);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		})();
	}, [seed]);

	const download = useCallback(async () => {
		try {
			if (!seedArray) return;

			setLoading(true);

			const filename = "F266B00B.pnach";

			const pnach = createPnach(seedArray);

			downloadjs(pnach, filename, "application/octet-stream");
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}, [seedArray]);

	const toggleSpoiler = useCallback(async () => {
		setSpoilerLogs(current => !current);
	}, []);

	if (loading && !configuration) {
		return (
			<div className={classes.loadingContainer}>
				<CircularProgress size={250} />
			</div>
		);
	} else if (error) {
		console.error(error);
		return <Typography>Invalid seed!</Typography>;
	}

	if (!configuration || !seedArray) return null;

	let gameMode = "";
	if (configuration.gameMode.mode === GameMode.BASE_GAME) {
		gameMode = "Base Game";
	} else if (configuration.gameMode.mode === GameMode.GOA_MOD) {
		gameMode = "Garden of Assemblage Mod";
	}

	return (
		<>
			<Paper variant="outlined" className={classes.paper}>
				<div className={classes.marginBottom}>
					<Typography variant="h4">Seed: {configuration.seed}</Typography>
					<Typography variant="h6">Game Mode: {gameMode}</Typography>
				</div>

				<Typography variant="h6">Randomize</Typography>

				<div className={classes.chipsWrapper}>
					<ConfigProperty property={configuration.criticalMode}>
						Critical Mode
					</ConfigProperty>
					<ConfigProperty property={configuration.stats}>Stats</ConfigProperty>
					<ConfigProperty property={configuration.abilities}>
						Abilities
					</ConfigProperty>
					<ConfigProperty property={configuration.level50}>
						Cap abilities at Level 50
					</ConfigProperty>
					<ConfigProperty property={configuration.donaldAbilities}>
						Donald's Abilities
					</ConfigProperty>
					<ConfigProperty property={configuration.goofyAbilities}>
						Goofy's Abilities
					</ConfigProperty>
					<ConfigProperty property={configuration.formAbilities}>
						Form Abilities
					</ConfigProperty>
				</div>

				<Typography variant="h6">Worlds</Typography>

				<div className={classes.chipsWrapper}>
					<ConfigProperty property={configuration.simulatedTwilightTown}>
						Simulated Twilight Town
					</ConfigProperty>
					<ConfigProperty property={configuration.twilightTown}>
						Twilight Town
					</ConfigProperty>
					<ConfigProperty property={configuration.hollowBastion}>
						Hollow Bastion
					</ConfigProperty>
					<ConfigProperty property={configuration.cavernOfRemembrance}>
						Cavern of Remembrance
					</ConfigProperty>
					<ConfigProperty property={configuration.beastsCastle}>
						Beast's Castle
					</ConfigProperty>
					<ConfigProperty property={configuration.olympus}>
						Olympus
					</ConfigProperty>
					<ConfigProperty property={configuration.agrabah}>
						Agrabah
					</ConfigProperty>
					<ConfigProperty property={configuration.landOfDragons}>
						Land of Dragons
					</ConfigProperty>
					<ConfigProperty property={configuration.pooh}>
						100 Acre Wood
					</ConfigProperty>
					<ConfigProperty property={configuration.atlantica}>
						Atlantica
					</ConfigProperty>
					<ConfigProperty property={configuration.prideLands}>
						Pride Lands
					</ConfigProperty>
					<ConfigProperty property={configuration.disneyCastle}>
						Disney Castle
					</ConfigProperty>
					<ConfigProperty property={configuration.timelessRiver}>
						Timeless River
					</ConfigProperty>
					<ConfigProperty property={configuration.halloweenTown}>
						Halloween Town
					</ConfigProperty>
					<ConfigProperty property={configuration.portRoyal}>
						Port Royal
					</ConfigProperty>
					<ConfigProperty property={configuration.spaceParanoids}>
						Space Paranoids
					</ConfigProperty>
					<ConfigProperty property={configuration.twtnw}>
						The World That Never Was
					</ConfigProperty>
				</div>

				<Typography variant="h6">Include</Typography>

				<div className={classes.chipsWrapper}>
					<ConfigProperty property={configuration.ultimaWeapon}>
						Ultima Weapon
					</ConfigProperty>
					<ConfigProperty property={configuration.finalForm}>
						Final Form
					</ConfigProperty>
					<ConfigProperty property={configuration.synthItems}>
						Synth Items
					</ConfigProperty>
				</div>

				<Button
					onClick={download}
					color="primary"
					variant="contained"
					className={classes.button}
				>
					Download seed
				</Button>

				<Button
					onClick={toggleSpoiler}
					color="primary"
					variant="contained"
					className={classes.button}
				>
					{spoilerLogs ? "Hide" : "Show"} spoiler logs
				</Button>
			</Paper>

			{spoilerLogs ? (
				<Paper className={classes.spoilerPaper} variant="outlined">
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell>Location</TableCell>
								<TableCell>Type</TableCell>
								<TableCell>Became</TableCell>
								<TableCell>Original</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{seedArray.map(({ reward, location }) => (
								<SpoilerLogRow
									key={location.value}
									reward={reward}
									location={location}
								/>
							))}
						</TableBody>
					</Table>
				</Paper>
			) : null}
		</>
	);
};
