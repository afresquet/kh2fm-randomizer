import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Configuration } from "../Configuration";
import { PickByType } from "../PickByType";

const useStyles = makeStyles(theme => ({
	paper: {
		margin: theme.spacing(3),
		marginLeft: "auto",
		marginRight: "auto",
		padding: theme.spacing(3),
		width: "50%",
	},
	seedWrapper: {
		marginBottom: theme.spacing(3),
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
		donaldAbilities: true,
		goofyAbilities: true,
	});

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
			setCheckbox(current => ({
				...current,
				[name]: checked,
			}));
		},
		[]
	);

	const onSubmit = useCallback(
		async (event: React.FormEvent<HTMLFormElement>) => {
			try {
				event.preventDefault();

				setLoading(true);

				const response = await axios.post<{ seed: string }>(
					"https://us-central1-kh2fm-randomizer.cloudfunctions.net/randomizer/seed",
					{
						...text,
						...checkbox,
					}
				);

				history.push(`/seed/${response.data.seed}`);
			} catch (error) {
				console.error(error);

				setLoading(false);
			}
		},
		[text, checkbox, history]
	);

	return (
		<Paper className={classes.paper}>
			<form noValidate onSubmit={onSubmit}>
				<div className={classes.seedWrapper}>
					<TextField
						name="seed"
						value={text.seed}
						label="Seed (defaults to current time)"
						onChange={onTextChange}
						fullWidth
					/>
				</div>

				<div>
					<FormControlLabel
						label="Critical Mode"
						control={
							<Checkbox
								name="criticalMode"
								checked={checkbox.criticalMode}
								onChange={onCheckboxChange}
							/>
						}
					/>
				</div>

				<div>
					<FormControlLabel
						label="Randomize Stats"
						control={
							<Checkbox
								name="stats"
								checked={checkbox.stats}
								onChange={onCheckboxChange}
							/>
						}
					/>
				</div>

				<div>
					<FormControlLabel
						label="Randomize Donald's Abilities"
						control={
							<Checkbox
								name="donaldAbilities"
								checked={checkbox.donaldAbilities}
								onChange={onCheckboxChange}
							/>
						}
					/>
				</div>

				<div>
					<FormControlLabel
						label="Randomize Goofy's Abilities"
						control={
							<Checkbox
								name="goofyAbilities"
								checked={checkbox.goofyAbilities}
								onChange={onCheckboxChange}
							/>
						}
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
