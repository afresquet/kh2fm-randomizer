import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

const generateRandomSeed = () => {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
};

export const useSeedName = () => {
	const params = useParams<{ seed: string }>();

	const [name, setSeed] = useState(params.seed || "");

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
