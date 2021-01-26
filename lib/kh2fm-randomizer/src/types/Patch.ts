import { Configuration } from "./configuration/Configuration";
import { Seed } from "./Seed";

export type Patch = (parameters: {
	seed: Seed;
	configuration: Configuration;
}) => string;
