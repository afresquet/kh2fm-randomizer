import { Button, Input } from "antd";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSeedName } from "../hooks/useSeedName";

export const Seed: React.FC<RouteComponentProps<{ seed: string }>> = ({
	match,
}) => {
	const { seed, onChange, onRandomSeed } = useSeedName(match.params.seed);

	return (
		<>
			<Input
				id="seed"
				placeholder="Seed name"
				value={seed}
				onChange={onChange}
				suffix={
					<Button type="primary" onClick={onRandomSeed}>
						Random
					</Button>
				}
			/>
		</>
	);
};
