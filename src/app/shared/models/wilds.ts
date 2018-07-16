import { Type } from '../models/type';
import * as TypeLib from '../models/typeLib';

const wildsTypes: [string, number][] = [['Basic', 3], ['Spell', 3], ['Creature', 7]];

export class Wilds {
  constructor() {
    for (const section of wildsTypes) {
      const sectionName = section[0];
      const sectionCount = section[1];
      this.wilds = this.wilds.concat(TypeLib.getRandomType(sectionName, sectionCount));
    }
  }
  private wilds: [Type, number][] = [];

  public* [Symbol.iterator]() {
    for (const item of this.wilds) {
      yield item[0];
    }
  }
}
