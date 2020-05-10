type KeysOfType<T, U> = {
	[P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

export type PickByType<T, U> = Pick<T, KeysOfType<T, U>>;
