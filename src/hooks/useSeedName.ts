import React, { useCallback, useState } from "react";

const generateRandomSeed = () => {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
};

export const useSeedName = (name?: string) => {
	const [seed, setSeed] = useState(name || "");

	const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setSeed(event.target.value);
	}, []);

	const onRandomSeed = useCallback(() => {
		setSeed(generateRandomSeed());
	}, []);

	return {
		seed,
		onChange,
		onRandomSeed,
	};
};
