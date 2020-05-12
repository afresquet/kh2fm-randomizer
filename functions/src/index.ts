import cors from "cors";
import express from "express";
import * as functions from "firebase-functions";
import { sign, verify } from "jsonwebtoken";
import { Configuration, GameMode } from "./Configuration";
import { createSeed } from "./logic/createSeed";

const {
	secret,
	algorithm,
	version,
	goamodversion,
} = functions.config().randomizer;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/seed", (req, res) => {
	let gameMode: Configuration["gameMode"] = {
		mode: GameMode.BASE_GAME,
		version: parseInt(version),
	};

	if (req.body.gameMode === GameMode.GOA_MOD) {
		gameMode = {
			mode: GameMode.GOA_MOD,
			version: parseInt(goamodversion),
		};
	}

	const seed = sign(
		{ ...req.body, seed: req.body.seed || Date.now().toString(), gameMode },
		secret,
		{ algorithm }
	);

	res.json({ seed });
});

app.get("/seed/:seed", (req, res) => {
	try {
		const configuration = verify(req.params.seed, secret, {
			algorithms: [algorithm],
		}) as Configuration;

		const seed = createSeed(configuration);

		res.json({ configuration, seed });
	} catch (error) {
		res.status(400).json({ error });
	}
});

export const randomizer = functions.https.onRequest(app);
