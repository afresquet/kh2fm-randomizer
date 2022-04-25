import { useCallback } from "react";

export const useValueMapper = <T, V, O extends keyof T = never>([
	state,
	setState,
]: [T, React.Dispatch<React.SetStateAction<T>>]) => {
	const onChange = useCallback(
		(setting: keyof Omit<T, O>) => (value: V) => {
			setState(current => ({
				...current,
				[setting]: value,
			}));
		},
		[setState]
	);

	return useCallback(
		(setting: keyof Omit<T, O>) => ({
			value: state[setting],
			onChange: onChange(setting),
		}),
		[state, onChange]
	);
};
