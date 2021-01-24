import seedrandom from "seedrandom";
import { abilityLevels } from "../rewardLocations/levels";
import {
	RewardLocation,
	RewardLocationType,
} from "../rewardLocations/RewardLocation";
import { replaceableRewardTypes, Reward, RewardType } from "../rewards/Reward";
import { Configuration } from "../settings/Configuration";
import { Leveling, RandomizingAction, Toggle } from "../settings/enums";
import { abilities } from "./abilities";
import { Seed } from "./Seed";
import { keybladeStats, stats } from "./stats";
import { shuffle } from "../helpers/shuffle";

const getReward = (
	seed: Seed,
	location: RewardLocation,
	rewards: Reward[],
	configuration: Configuration,
	include?: boolean,
	nextIndex?: number
): Reward => {
	let index = nextIndex;

	if (index === undefined) {
		const seeder = seedrandom(configuration.name + location.value);

		index = Math.floor(seeder() * rewards.length);
	}

	const candidate = rewards[index];

	if (include) {
		const includesReward = location.gameMode?.[
			configuration.gameMode.mode
		]?.include?.includes(candidate);
		const includesRewardType = location.gameMode?.[
			configuration.gameMode.mode
		]?.includeType?.includes(candidate.type);
		const excludesReward = location.gameMode?.[
			configuration.gameMode.mode
		]?.exclude?.includes(candidate);
		const excludesRewardType = location.gameMode?.[
			configuration.gameMode.mode
		]?.excludeType?.includes(candidate.type);

		if (
			(includesReward || includesRewardType) &&
			!excludesReward &&
			!excludesRewardType
		)
			return rewards.splice(index, 1)[0];
	} else {

		if (
			location.type !== RewardLocationType.POPUP || candidate.type !== RewardType.ABILITY
		)
			return rewards.splice(index, 1)[0];
	}

	return getReward(
		seed,
		location,
		rewards,
		configuration,
		include,
		(index + 1) % rewards.length
	);
};

function arrayCount(arr:any[],val:any) : number
{
	var count : number = 0;
	for(const a of arr)
	{
		if(val===a)
		{
			count++;
		}
	}
	return count;
}
function arrayCountMultiple(arr:any[],vals:any[]) : number
{
	var count : number = 0;
	for(const a of arr)
	{
		for(const v of vals)
		{
			if(v===a)
			{
				count++;
			}
		}
	}
	return count;
}

function Agrabah2(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CDF946",
								"11CDF952",
								"21D10978",
								"11CE08B2"];

	if(!check)
	{
		return locations;
	}


	// we must have fire blizzard and thunder
	if(collected.includes("0015")&&collected.includes("0016")&&collected.includes("0017"))
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function AtlanticaMA(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CE08E2"];

	if(!check)
	{
		return locations;
	}


	// we must have two magnets
	if(arrayCount(collected,"0057")>=2)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function AtlanticaBlizz(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CE08EE","11CE08FA"];

	if(!check)
	{
		return locations;
	}

	// we must have two magnets and three thunders
	if(arrayCount(collected,"0057")>=2 && arrayCount(collected,"0017")>=3)
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function CavernGrowths(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CE04E6",
								"11CE04F2",
								"11CE04FE",
								"11CE050A",
								"11CE0516",
								"11CE0522",
								"11CE052E",
								"11CE053A",
								"11CE0546",
								"11CE0552",
								"11CE055E",
								"11CE056A",
								"11CE0576",
								"11CE0582",
								"11CE058E",
								"11CE059A",
								"11CE05A6",
								"11CE05BE",
								"11CE05B2",
								"11CE05CA",
								"11CE05D6"];

	if(!check)
	{
		return locations;
	}



	// Currently trying needing 3 of the movement growths
	if(arrayCountMultiple(collected,["005E","005F","0060","0061"])>=3 && arrayCountMultiple(collected,["0062","0063","0064","0065"])>=3
		&& arrayCountMultiple(collected,["0066","0067","0068","0069"])>=3 && arrayCountMultiple(collected,["006A","006B","006C","006D"])>=3)
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function ProofOfConnection(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CE0B16",
								"11CE0B22"];

	if(!check)
	{
		return locations;
	}

	// Can't get checks without proof
	if(collected.includes("0251"))
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function ProofOfPeace(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CE0B2E",
								"11CE0B3A"];

	if(!check)
	{
		return locations;
	}

	// Can't get checks without proof
	if(collected.includes("0253"))
	{
		return locations;
	}
	else
	{
		return [];
	}
}


function DataDemyx(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CE0AB6"];

	if(!check)
	{
		return locations;
	}

	// Need all the forms for some reason :shrug
	if(collected.includes("0233") && collected.includes("001A") && collected.includes("001B")&& collected.includes("001D")&& collected.includes("001F"))
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function HadesCup(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CE0996"];

	if(!check)
	{
		return locations;
	}

	// Need all the forms and summons
	if(collected.includes("0233") && collected.includes("001A") && collected.includes("001B")&& collected.includes("001D")&& collected.includes("001F") && 
		 collected.includes("009F") && collected.includes("00A0") &&collected.includes("017F") &&collected.includes("0019"))
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Valor23(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A22E","11D1A236"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001A"))
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Valor4(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A23E"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001A") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=2)
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Valor5(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A246"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001A") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=3)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Valor6(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A24E"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001A") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=4)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Valor7(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A256"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001A") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])===5)
	{
		return locations;
	}
	else
	{
		return [];
	}
}



function Wisdom23(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A266","11D1A26E"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001B"))
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Wisdom4(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A276"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001B") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=2)
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Wisdom5(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A27E"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001B") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=3)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Wisdom6(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A286"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001B") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=4)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Wisdom7(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A28E"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001B") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])===5)
	{
		return locations;
	}
	else
	{
		return [];
	}
}


function Limit23(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A29E","11D1A2A6"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("0233"))
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Limit4(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A2AE"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("0233") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=2)
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Limit5(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A2B6"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("0233") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=3)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Limit6(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A2BE"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("0233") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=4)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Limit7(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A2C6"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("0233") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])===5)
	{
		return locations;
	}
	else
	{
		return [];
	}
}




function Master23(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A2D6","11D1A2DE"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001F"))
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Master4(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A2E6"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001F") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=2)
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Master5(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A2EE"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001F") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=3)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Master6(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A2F6"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001F") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=4)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Master7(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A2FE"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001F") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])===5)
	{
		return locations;
	}
	else
	{
		return [];
	}
}



function Final23(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A30E","11D1A316"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001D"))
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Final4(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A31E"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001D") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=2)
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Final5(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A326"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001D") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=3)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Final6(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A32E"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001D") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])>=4)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Final7(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11D1A336"];

	if(!check)
	{
		return locations;
	}
	if(collected.includes("001D") && arrayCountMultiple(collected,["001A","001B","0233","001F","001D"])===5)
	{
		return locations;
	}
	else
	{
		return [];
	}
}

function Pooh1(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CDFA36","11CDFA42","11CDFA4E"];

	if(!check)
	{
		return locations;
	}
	if(arrayCount(collected,"0020")>=1)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Pooh2(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CDFA5A","11CDFA66","11CDFA72"];

	if(!check)
	{
		return locations;
	}
	if(arrayCount(collected,"0020")>=2)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Pooh3(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CDFA7E","11CDFA8A","11CDFA96"];

	if(!check)
	{
		return locations;
	}
	if(arrayCount(collected,"0020")>=3)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Pooh4(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CDFAA2","11CDFAAE","11CDFABA","11CDFAC6","11CDFAD2","11CDFADE","11CE0906","11CE0912"];

	if(!check)
	{
		return locations;
	}
	if(arrayCount(collected,"0020")>=4)
	{
		return locations;
	}
	else
	{
		return [];
	}
}
function Pooh5(collected:string[], check:boolean=true) : string[]
{
	const locations: string[] = ["11CDFAEA","11CDFAF6","11CE091E","11CE092A"];

	if(!check)
	{
		return locations;
	}
	if(arrayCount(collected,"0020")>=5)
	{
		return locations;
	}
	else
	{
		return [];
	}
}



const validateSeed = (
	seed: Seed
): boolean => {

	const collectedRewards = [];

	var blockedChecks: any = [Agrabah2, AtlanticaMA, AtlanticaBlizz, CavernGrowths, ProofOfConnection, ProofOfPeace, DataDemyx, HadesCup, 
								Valor23, Valor4, Valor5, Valor6, Valor7,
								Wisdom23, Wisdom4, Wisdom5, Wisdom6, Wisdom7,
								Master23, Master4, Master5, Master6, Master7,
								Limit23, Limit4, Limit5, Limit6, Limit7,
								Final23, Final4, Final5, Final6, Final7,
								Pooh1, Pooh2, Pooh3, Pooh4, Pooh5];

	// want to "collect" the items from the seed. 
	// First starting with all unblocked locations
	var blockedLocations :string[] = [];

	for(const c of blockedChecks)
	{
		blockedLocations = blockedLocations.concat(c([],false));
	}

	for (const element of seed)
	{
		if(!blockedLocations.includes(element.location.value))
		{
			collectedRewards.push(element.reward.value);
		}
	}

	while(blockedChecks.length>0)
	{
		const completed = [];
		const failed = [];

		for( const check of blockedChecks)
		{
			const result = check(collectedRewards);
			if(result.length>0)
			{
				for(const loc of result)
				{
					completed.push(loc);
				}
			}
			else
			{
				failed.push(check);
			}
		}

		if(blockedChecks.length===failed.length)
		{
			return false;
		}
		blockedChecks = failed;
		for (const element of seed)
		{
			if(completed.includes(element.location.value))
			{
				collectedRewards.push(element.reward.value);
			}
		}
	}

	return true;
};

export function advancedAssign(
	rewards: Reward[],
	rewardLocations: RewardLocation[],
	configuration: Configuration,
	pool = false
): Seed {

	var attempt: number = 0
	while(true)
	{
		const seed: Seed = [];
		const local_rewards = [...shuffle(rewards, configuration.name+attempt.toString())]
		attempt++;


		//zeroing out abilities
		if (
			!pool &&
			configuration.settings.leveling !== Leveling.LEVEL_ONE &&
			configuration.settings.abilities === RandomizingAction.REPLACE
		) {
			const replaceable: Reward[] = [];

			while (replaceable.length < abilityLevels.length) {
				const reward = local_rewards.find(r =>
					replaceableRewardTypes.includes(r.type)
				)!;

				replaceable.push(local_rewards.splice(local_rewards.indexOf(reward), 1)[0]);
			}

			seed.push(...abilities(replaceable, configuration));
		}

		// Include
		for (const location of rewardLocations) {
			if (
				!location.gameMode?.[configuration.gameMode.mode]?.include &&
				!location.gameMode?.[configuration.gameMode.mode]?.includeType
			)
				continue;

			seed.push({
				location,
				reward: getReward(seed, location, local_rewards, configuration, true),
			});
		}

		// Exclude
		for (const location of rewardLocations) {
			if (
				location.gameMode?.[configuration.gameMode.mode]?.include ||
				location.gameMode?.[configuration.gameMode.mode]?.includeType
			)
				continue;

			if (
				!location.gameMode?.[configuration.gameMode.mode]?.exclude &&
				!location.gameMode?.[configuration.gameMode.mode]?.excludeType &&
				location.type !== RewardLocationType.POPUP
			)
				continue;

			seed.push({
				location,
				reward: getReward(seed, location, local_rewards, configuration),
			});
		}

		// Rest
		for (const location of rewardLocations) {
			if (
				location.gameMode?.[configuration.gameMode.mode] ||
				location.type === RewardLocationType.POPUP
			)
				continue;

			seed.push({
				location,
				reward: local_rewards.shift()!,
			});
		}

		if (!pool && configuration.settings.leveling !== Leveling.LEVEL_ONE) {
			if (configuration.settings.abilities === RandomizingAction.RANDOMIZE) {
				seed.push(...abilities(local_rewards, configuration));
			}

			if (configuration.settings.stats === Toggle.ON) {
				seed.push(...stats(configuration));
			}
		}

		if (
			!pool &&
			configuration.settings.keybladeStats !== RandomizingAction.VANILLA
		) {
			seed.push(...keybladeStats(configuration));
		}

		if(validateSeed(seed))
		{
			return seed;
		}
		else
		{
			console.log("Need to regenerate since seed was invalid");
		}
	}
}