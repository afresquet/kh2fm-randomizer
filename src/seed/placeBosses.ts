import { shuffle } from "src/helpers/shuffle";
import { bosses } from "../enemyLocations";

export const placeBosses = (seed: string) => {
	const attemptPlacing = (availableLocations: any[], availableBosses: any[]) => {
		// given x available bosses and a mapping of available locations to place each boss
		// recursively return a mapping of available bosses to random available locations
		if (availableBosses.length === 0)
			return [] // base case
		
		// try doing something for every available boss, or return false if the seed can't be completed
		for (const newenemy of availableBosses) {
			// available locations for the current boss being looped through
			const possibleLocations = availableLocations.find(loc => loc.boss.enemy.name === newenemy.enemy.name && loc.boss.room === newenemy.room)
			// if the available locations have no possible spot, return false because this combination results in unplaceable bosses
			if (possibleLocations.available.length === 0) 
				return false

			// loop through each enemies available locations
			for (var locindex = 0; locindex < possibleLocations.available.length; locindex++ ) {
				// current locations being looped through
				const location = possibleLocations.available[locindex]
				// take this location out of the available pool for everybody else
				const newLocations = availableLocations.map(enemy => {
					enemy.available = enemy.available.filter((loc: any) => loc !== location)
					return enemy
				});
				// take this boss out of the available pool for everybody else
				const newBosses = availableBosses.filter(boss => boss !== newenemy)

				// get a mapping for the rest of the bosses
				const bossMapping: any = attemptPlacing(newLocations, newBosses)

				if (bossMapping === false) {
					// this boss didn't work, try placing the next boss in the next iteration
				} else {
					// add the boss to the boss mapping, and return
					bossMapping.push( { old: location, new: newenemy} )
					return bossMapping
				}
			}
		}
		return false
	};

	const unignoredBosses = [
		...shuffle(
			bosses
				.map(location => {
					return location.enemies.map(enemy  => {
						enemy.world = location.world
						enemy.room = location.room
						enemy.event = location.event
						return enemy
					})
				})
				.reduce((prev, curr) => prev.concat(curr)),
				seed
		),
	];

	var ignored: any[] = []
	for (var b = 0; b < bosses.length; b++) {

		// Try multiple times to find a correct placing for the bosses	
		const NATTEMPTS = 3
		for (var i = 0; i < NATTEMPTS; i++) {
			const shuffledBosses = unignoredBosses.map(boss => boss)
			const availableLocations = shuffledBosses.map(newboss => {
				return {
					boss: newboss,
					available: [...shuffle(unignoredBosses.filter(oldboss => {
						if (!newboss.enemy.rules)
							return true
						if (!newboss.enemy.rules.bannedFrom)
							return true
						return !newboss.enemy.rules.bannedFrom.includes(oldboss.enemy.name)
					}), seed)]
				}
			})
			const replacementMapping = attemptPlacing(availableLocations, shuffledBosses)
			if (replacementMapping !== false)
				return replacementMapping.concat(ignored)
		}
		// After a few retries, pick one of the bosses to be randomized to itself, and try again
		// probably in the future toignore should be randomly chosen among the bosses with the least possible places to go
		var toignore = unignoredBosses.pop()
		ignored.push({old: toignore, new: toignore})

	}
	// worst case returns a seed that has no boss randomization, which is unlikely.
	return ignored
};