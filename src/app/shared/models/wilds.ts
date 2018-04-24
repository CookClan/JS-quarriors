import { Type } from '../models/type';
import * as TypeLib from '../models/typeLib';

const wildsTypes: [string, number][] = [["Basic",3], ["Spell",3], ["Creature", 7]];
const basicKeys: string[] = ["quiddity", "assistant", "portal"];

export class Wilds {
  constructor() {
    
    for (let section of wildsTypes){
      let sectionName = section[0];
      let sectionCount = section[1];
      this.wilds.concat(TypeLib.getRandomType(sectionName, sectionCount));
    }
  } 
  private wilds: [Type, number][] = [];
}
