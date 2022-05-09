import { File } from "../types/File";

const files: [string, number, number][] = [
	["Save", 0x032bb30, 0x10fc0], // Save file
	["Sys3", 0x1ccb300, 0x1aa68], // 03system.bin
	["Btl0", 0x1ce5d80, 0x354d0], // 00battle.bin
];

function offsetLocation(location: string): string {
	const address = parseInt(location.substring(1), 16);

	for (const [file, offset, size] of files) {
		if (address - offset < size) {
			return `${file} + 0x${(address - offset)
				.toString(16)
				.toUpperCase()
				.padStart(5, "0")}`;
		}
	}

	return "";
}

/**
 * @description Creates a cheat code string.
 */
export const createLine = (
	address: string,
	digit: string,
	file: File,
	newLine = true
): string => {
	const paddedAddress = address.padStart(8, "0").toUpperCase();
	const paddedDigit = digit.padStart(8, "0").toUpperCase();

	if (file === File.pnach) {
		return `patch=1,EE,${paddedAddress},extended,${paddedDigit}${
			newLine ? "\n" : ""
		}`;
	}

	const func = `Write${
		["Byte", "Short", "Int"][parseInt(paddedAddress.charAt(0), 10)]
	}`;

	const offLoc = offsetLocation(paddedAddress);

	return `	${func}(${offLoc}, 0x${paddedDigit})${newLine ? "\n" : ""}`;
};
