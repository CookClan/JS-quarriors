import { Type } from './type';
import { DieSide } from './die-side';
import { Spell } from './spell';
/**
 * Holds the data about a Summoned creature
*/
export class Creature {
    private spells: Spell[];
    public constructor(private type: Type, private side: number) {}
    public diceSide(): DieSide {
        return this.type.die.sides[this.side]; // determines what is displayed
    }
    public get attack(): number {
        return this.diceSide().attack; // will be extended
    }
    public get defense(): number {
        return this.diceSide().defense; // will be extended
    }
}
