import { Type } from './type';
import { DiceSide } from './dice-side';
import { Spell } from './spell';
/**
 * Holds the data about a Summoned creature
*/
export class Creature { //might need to conolidate spells and creatures as one class "Rolled"
    //this can either be another rolled die or a direct reference against an attached ability, would need a reference back to the original type either way.
    private attachments: Rolled[]; 
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
