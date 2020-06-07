import { Button, Input } from "antd";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";

export const SeedNameInput: React.FC = () => {
	const {
		seed: { seed, onChange, onRandomSeed },
	} = useContext(SeedContext);

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
