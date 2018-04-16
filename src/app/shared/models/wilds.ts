import { Type } from '../models/type';
import * as TypeLib from '../models/typeLib';

export class Wilds {
  const wildsTypes: [string, number][] = [["Basic",3], ["Spell",3], ["Creature", 7]];
  const basicKeys: string[] = ["quiddity", "assistant", "portal"];
  constuctor() {
    for (let section of wildsTypes){
      let sectionName = section[0];
      let sectionCount = section[1];
      wilds.concat(TypeLib.getRandomType(sectionName, sectionCount));
    }
  } 
  private wilds: [type, number][];
}
