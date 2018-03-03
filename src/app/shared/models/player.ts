import { Type } from './type';
import { Creature } from './creature';
import { Spell } from './spell';
/**
 * Holds the data about a Player
*/
export class Player {
    private glory: number;
    private bag: Type[];
    private creatures: Creature[];
    private spells: Spell[];
    private spent: Type[];
    private used: Type[];
}
