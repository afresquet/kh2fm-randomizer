export const placeBosses = (availableLocations: any[], availableBosses: any[]) => {
	// given x available bosses and a mapping of available locations to place each boss
	// return a mapping of available bosses to random available locations
	if (availableBosses.length == 0)
		return [] // base case
	
	// try doing something for every available boss, or return false if the seed can't be completed
	for (var index = 0; index < availableBosses.length; index++) {
		// current boss being looped through
		var newenemy = availableBosses[index]
		// available locations for the current boss being looped through
		const possibleLocations = availableLocations.find(loc => loc.boss.enemy.name == newenemy.enemy.name && loc.boss.room == newenemy.room)
		// if the available locations have no possible spot, return false because this combination results in unplaceable bosses
		if (possibleLocations.available.length == 0) 
			return false

		// loop through each enemies available locations
		for (var locindex = 0; locindex < possibleLocations.available.length; locindex++ ) {
			// current locations being looped through
			const location = possibleLocations.available[locindex]
			// take this location out of the available pool for everybody else
			const newLocations = availableLocations.map(enemy => {
				var newenemy = JSON.parse(JSON.stringify(enemy));
				newenemy.available = newenemy.available.filter((loc: any) => loc != location)
				return newenemy
			});
			// take this boss out of the available pool for everybody else
			const newBosses = availableBosses.filter(boss => boss != newenemy)

			// get a mapping for the rest of the bosses
			const bossMapping: any = placeBosses(newLocations, newBosses)

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

