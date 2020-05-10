import * as functions from "firebase-functions";
import { createPnach } from "./logic/createPnach";

export const randomizer = functions.https.onRequest(async (req, res) => {
	const seedVariable = (req.query.seed as string) || Date.now().toString();

	const pnach = createPnach(seedVariable);

	res.set({ "Content-Disposition": 'attachment; filename="F266B00B.pnach"' });
	res.send(pnach);
});
