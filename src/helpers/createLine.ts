/**
 * @description Creates a cheat code string.
 */
export const createLine = (
	address: string,
	digit: string,
	newLine = true
): string => {
	const paddedAddress = address.padStart(8, "0").toUpperCase();
	const paddedDigit = digit.padStart(8, "0").toUpperCase();

	return `patch=1,EE,${paddedAddress},extended,${paddedDigit}${
		newLine ? "\n" : ""
	}`;
};
