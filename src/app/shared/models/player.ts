import { Type } from './type';
import { Creature } from './creature';
import { Spell } from './spell';
/**
 * Holds the data about a Player
*/
export class Player {
    private glory: number;
    private bag: Type[];
    private ready: Rolled[]; //will be the result of the side rolled, and the type the die is bound to
    private spent: Rolled[];
    private used: Rolled[]; //we don't turn into types again till we get bagged
}
