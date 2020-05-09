import { Reward } from "../Reward";
import { donaldRewards } from "./Donald";
import { goofyRewards } from "./Goofy";

export const rewardLocations: Reward[] = [...goofyRewards, ...donaldRewards];
