import { Sleeve as SleeveType } from "../PersonObjects/Sleeve/Sleeve";
import { PlayerObject as PlayerType } from "../PersonObjects/Player/PlayerObject";

import { Settings } from "../Settings/Settings";
import { canAccessBitNodeFeature } from "../BitNode/BitNodeUtils";

type PersonTypeProp = SleeveType | PlayerType;

interface SkillRowData {
  name: string;
  color: string;
  level: number;
  exp: number;
}

export function getSkillsRows(props: PersonTypeProp): SkillRowData[] {
  const rows: SkillRowData[] = [
    { name: "Hacking", color: Settings.theme.hack, level: props.skills.hacking, exp: props.exp.hacking },
    { name: "Strength", color: Settings.theme.combat, level: props.skills.strength, exp: props.exp.strength },
    { name: "Defense", color: Settings.theme.combat, level: props.skills.defense, exp: props.exp.defense },
    { name: "Dexterity", color: Settings.theme.combat, level: props.skills.dexterity, exp: props.exp.dexterity },
    { name: "Agility", color: Settings.theme.combat, level: props.skills.agility, exp: props.exp.agility },
    { name: "Charisma", color: Settings.theme.cha, level: props.skills.charisma, exp: props.exp.charisma },
  ];
  if (props.skills.intelligence > 0 && canAccessBitNodeFeature(5)) {
    rows.push({
      name: "Intelligence",
      color: Settings.theme.int,
      level: props.skills.intelligence,
      exp: props.exp.intelligence,
    });
  }
  return rows;
}
