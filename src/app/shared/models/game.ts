import { Player } from './player';
import { Type } from './type';
/**
 * Holds the data about the game
*/
export class Game {
    private players: Player[];
    private wilds: Map<Type, number>;
    private gloryGoal: number;
}
