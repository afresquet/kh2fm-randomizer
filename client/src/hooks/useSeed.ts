import { message } from "antd";
import { Configuration, createSeed, Seed } from "kh2fm-randomizer";
import { useEffect, useReducer } from "react";

interface SeedState {
	seed: Seed | null;
	error: any;
	loading: boolean;
}
type SeedActions =
	| { type: "seed"; payload: Seed }
	| { type: "create" }
	| { type: "error"; payload: any }
	| { type: "reset" };

const initialState: SeedState = {
	seed: null,
	loading: false,
	error: false,
};

const seedReducer = (state: SeedState, action: SeedActions): SeedState => {
	switch (action.type) {
		case "seed":
			return {
				...state,
				seed: action.payload,
				loading: false,
				error: false,
			};
		case "create":
			return {
				...state,
				seed: null,
				loading: true,
				error: null,
			};
		case "error":
			return {
				...state,
				seed: null,
				loading: false,
				error: action.payload,
			};
		case "reset":
			return initialState;
		default:
			return state;
	}
};

export const useSeed = (configuration: Configuration): SeedState => {
	const [state, dispatch] = useReducer(seedReducer, initialState);

	useEffect(() => {
		if (configuration.name === "") {
			dispatch({ type: "reset" });

			return;
		}

		dispatch({ type: "create" });

		const timeoutId = setTimeout(() => {
			try {
				const seed = createSeed(configuration);

				dispatch({ type: "seed", payload: seed });
			} catch (error) {
				console.error(error);

				dispatch({ type: "error", payload: error });

				if (error.message === "Maximum call stack size exceeded") {
					message.error('Too many "Replace" options!', 10);
				} else {
					message.error(error.message, 10);
				}
			}
		}, 500);

		return () => {
			clearTimeout(timeoutId);

			dispatch({ type: "reset" });
		};
	}, [configuration]);

	return state;
};
