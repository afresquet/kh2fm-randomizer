import React, { useCallback, useState } from "react";

const generateRandomSeed = () => {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
};

export const useSeedName = (seedName?: string) => {
	const [name, setSeed] = useState(seedName || "");

	const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setSeed(event.target.value);
	}, []);

	const onRandomSeed = useCallback(() => {
		setSeed(generateRandomSeed());
	}, []);

	return {
		name,
		onChange,
		onRandomSeed,
	};
};
