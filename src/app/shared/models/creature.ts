import { Type } from './type';
import { DiceSide } from './dice-side';
import { Spell } from './spell';
/**
 * Holds the data about a Summoned creature
*/
export class Creature {
    private spells: Spell[]; //might be better to have this be it's own class like attachment or enhancement
    public constructor(private type: Type, private side: number) {}
    public diceSide(): DiceSide {
        return this.type.class.diceSides[this.side]; // determines what is displayed
    }
    public get attack(): number {
        return this.diceSide().attack; // will be extended
    }
    public get defense(): number {
        return this.diceSide().defense; // will be extended
    }
}
