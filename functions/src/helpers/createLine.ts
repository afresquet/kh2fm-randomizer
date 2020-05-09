export const createLine = (address: string, digit: string): string => {
	const paddedAddress = address.padStart(8, "0").toUpperCase();
	const paddedDigit = digit.padStart(8, "0").toUpperCase();

	return `patch=1,EE,${paddedAddress},extended,${paddedDigit}\n`;
};
