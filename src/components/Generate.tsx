import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import React, { useCallback, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Configuration } from "../Configuration";
import { PickByType } from "../PickByType";

export const Generate: React.FC<RouteComponentProps> = ({ history }) => {
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
		(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			setLoading(true);

			fetch("/randomizer/seed", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...text, ...checkbox }),
			})
				.then(response => response.json())
				.then(({ seed }) => {
					history.push(`/seed/${seed}`);
				})
				.catch(error => {
					console.error(error);
					setLoading(false);
				});
		},
		[text, checkbox, history]
	);

	return (
		<form noValidate onSubmit={onSubmit}>
			<TextField
				name="seed"
				value={text.seed}
				label="Seed (defaults to current time)"
				onChange={onTextChange}
				fullWidth
			/>

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

			<Button type="submit" disabled={loading} fullWidth>
				{loading ? "Generating seed..." : "Generate seed"}
			</Button>
		</form>
	);
};
