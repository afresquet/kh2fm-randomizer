import * as functions from "firebase-functions";
import { Configuration } from "./Configuration";
import { createPnach } from "./logic/createPnach";

export const randomizer = functions.https.onRequest(async (req, res) => {
	// would get this from the request
	const configuration: Configuration = { seed: req.query.seed as string };

	const pnach = createPnach({
		...configuration,
		seed: configuration.seed || Date.now().toString(),
	});

	res.set({ "Content-Disposition": 'attachment; filename="F266B00B.pnach"' });
	res.send(pnach);
});
