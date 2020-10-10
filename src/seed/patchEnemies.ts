import { createLine } from "../helpers/createLine";
import { createJoker } from "../helpers/createJoker";
export const patchEnemies = (enemymap: any[], world: string, room: string, event: string) => {
    var comment = "// "
    var codes = []


    for (var index = 0; index < enemymap.length; index++) {
        const replacement = enemymap[index]
        const oldenemy = replacement.old
        const newenemy = replacement.new
        comment += `${newenemy.enemy.name} (was ${oldenemy.enemy.name}), `
        if (oldenemy !== newenemy) {
            var newValue = newenemy.enemy.value

            if (newenemy.enemy.rules) {
                if (newenemy.enemy.rules.useWhenReplacing) {
                    newValue = newenemy.enemy.rules.useWhenReplacing
                }
            }
            const modifierAddress  = (parseInt(oldenemy.value, 16) + 32).toString(16);
            const modifier =
                newValue.length === 6 ? newValue.substring(0, 2) : "";
            codes.push(createLine(oldenemy.value, newValue, false))
            codes.push(createLine(modifierAddress, modifier, false))
            const sourcePatches = oldenemy.patches
            if (sourcePatches) {
                if (sourcePatches.all) {
                    for (const patch of sourcePatches.all) {
                        // code += "\n //" + patch.name + "\n"/
                        for (const line of patch.codes) {
                            codes.push(createLine(line.split(" ")[0], line.split(" ")[1], false))
                        }
                    }
                }
            }
            const newPatches = newenemy.enemy.patches
            if (newPatches) {
                if (newPatches.all) {
                    for (const patch of newPatches.all) {
                        for (const line of patch.codes) {
                            codes.push(createLine(line.split(" ")[0], line.split(" ")[1], false))
                        }
                    }
                }
            }
        }
    }
    return comment.substr(0,comment.length-2) + "\n" + createJoker(codes, world, room, event).join("\n") + "\n"
}