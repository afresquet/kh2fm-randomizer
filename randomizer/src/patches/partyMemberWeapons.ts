import { File } from "../types/File";
import { Patch } from "../types/Patch";

export const partyMemberWeapons: Patch = {
	[File.pnach]: "",
	[File.lua]: `
	--Start With Party Member Weapons
	WriteByte(Save + 0x35B3, 0x00000001)    --Beast's Claw
	WriteByte(Save + 0x35B4, 0x00000001)    --Bone Fist
	WriteByte(Save + 0x35B5, 0x00000001)    --Proud Fang
	WriteByte(Save + 0x35B6, 0x00000001)    --Skill and Crossbones
	WriteByte(Save + 0x3643, 0x00000001)    --Membership Card
	WriteByte(Save + 0x3649, 0x00000001)    --Ice Cream
	WriteByte(Save + 0x364A, 0x00000001)    --Picture
	WriteByte(Save + 0x35AE, 0x00000001)    --Battlefields of War
	WriteByte(Save + 0x35AF, 0x00000001)    --Sword of the Ancestors
	WriteByte(Save + 0x35C0, 0x00000001)    --Scimitar
	WriteByte(Save + 0x35C2, 0x00000001)    --Identity Disk
`,
};
