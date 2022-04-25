export const api: string =
	process.env.NODE_ENV === "production"
		? "https://us-central1-kh2fm-randomizer.cloudfunctions.net/randomizer"
		: "http://localhost:5001/kh2fm-randomizer/us-central1/randomizer";
