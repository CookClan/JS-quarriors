import { Type } from './type';
import { DiceSide } from './dice-side';
import { Spell } from './spell';
/**
 * Holds the data about a Summoned creature
*/
export class Creature { //might need to conolidate spells and creatures as one class or interface "Rolled"
  //the skill that generates from a spell being cast, if the skill is an attachment there will be a refrence to the original rolled spell
    private enhancments: Enhancments[]; 
    public constructor(private type: Type, private side: number) {}
    public diceSide(): DiceSide {
        return this.type.class.diceSides[this.side]; // determines what is displayed
      //burst,icon,level
    }
    public get attack(): number {
        return this.diceSide().attack; // determines attack to be displayed
    }
    public get defense(): number {
        return this.diceSide().defense; // determines defense to be displayed
    }
}
