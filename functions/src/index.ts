import express from "express";
import * as functions from "firebase-functions";
import { sign, verify } from "jsonwebtoken";
import { Configuration } from "./Configuration";
import { createPnach } from "./logic/createPnach";

const { secret, algorithm } = functions.config().randomizer;

const app = express();

app.use(express.json());

app.post("/seed", (req, res) => {
	const seed = sign(
		{ ...req.body, seed: req.body.seed || Date.now().toString() },
		secret,
		{ algorithm }
	);

	res.json({ seed });
});

app.get("/seed/:seed", (req, res) => {
	try {
		const configuration = verify(req.params.seed, secret, {
			algorithms: [algorithm],
		});

		const pnach = createPnach(configuration as Configuration);

		res.set({ "Content-Disposition": 'attachment; filename="F266B00B.pnach"' });
		res.send(pnach);
	} catch (error) {
		res.status(400).json({ error });
	}
});

export const randomizer = functions.https.onRequest(app);
