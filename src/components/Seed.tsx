import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import downloadjs from "downloadjs";
import React, { useCallback, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Configuration } from "../Configuration";

const ConfigProperty: React.FC<{ property: boolean }> = ({
	property,
	children,
}) => {
	return property ? (
		<Typography>
			{children}{" "}
			<span role="img" aria-label="enabled">
				✅
			</span>
		</Typography>
	) : null;
};

const useStyles = makeStyles(theme => ({
	paper: {
		margin: theme.spacing(3),
		marginLeft: "auto",
		marginRight: "auto",
		padding: theme.spacing(3),
		width: "50%",
		textAlign: "center",
	},
	title: {
		marginBottom: theme.spacing(3),
	},
	button: {
		marginTop: theme.spacing(3),
		width: "75%",
	},
}));

export const Seed: React.FC<RouteComponentProps<{ seed: string }>> = ({
	match: {
		params: { seed },
	},
}) => {
	const classes = useStyles();

	const [configuration, setConfiguration] = useState<Configuration>({} as any);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		(async function () {
			try {
				const { data } = await axios.get<Configuration>(
					`https://us-central1-kh2fm-randomizer.cloudfunctions.net/randomizer/seed/${seed}`
				);

				setConfiguration(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		})();
	}, [seed]);

	const download = useCallback(async () => {
		try {
			setLoading(true);

			const filename = "F266B00B.pnach";

			const response = await axios.get<Blob>(
				`https://us-central1-kh2fm-randomizer.cloudfunctions.net/randomizer/file/${seed}?filename=${filename}`,
				{
					responseType: "blob",
				}
			);

			downloadjs(response.data, filename, "application/octet-stream");
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}, [seed]);

	if (loading && !configuration) {
		return <div>loading...</div>;
	} else if (error) {
		console.error(error);
		return <div>error</div>;
	}

	return (
		<Paper variant="outlined" className={classes.paper}>
			<Typography variant="h4" className={classes.title}>
				Seed: {configuration.seed}
			</Typography>

			<ConfigProperty property={configuration.criticalMode}>
				Critical Mode
			</ConfigProperty>
			<ConfigProperty property={configuration.stats}>
				Randomize Stats
			</ConfigProperty>
			<ConfigProperty property={configuration.donaldAbilities}>
				Randomize Donald's Abilities
			</ConfigProperty>
			<ConfigProperty property={configuration.goofyAbilities}>
				Randomize Goofy's Abilities
			</ConfigProperty>

			<Button
				onClick={download}
				color="primary"
				variant="contained"
				className={classes.button}
			>
				Download seed
			</Button>
		</Paper>
	);
};
