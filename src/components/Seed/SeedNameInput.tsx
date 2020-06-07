import { Button, Input } from "antd";
import React from "react";

interface Props {
	seed: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onRandomSeed: () => void;
}

export const SeedNameInput: React.FC<Props> = ({
	seed,
	onChange,
	onRandomSeed,
}) => {
	return (
		<Input
			id="seed"
			placeholder="Seed name"
			value={seed}
			onChange={onChange}
			suffix={
				<Button
					type="primary"
					onClick={onRandomSeed}
					style={{ marginRight: -7 }}
				>
					Random
				</Button>
			}
			autoComplete="off"
			autoCapitalize="off"
			autoCorrect="off"
			spellCheck={false}
		/>
	);
};
