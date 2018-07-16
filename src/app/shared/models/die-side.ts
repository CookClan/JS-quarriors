import { Icon } from './icon.enum';
import { Die } from './die';
/**
 * Holds the data about a single side of a die
*/
export class DieSide {
    constructor(
        public icon: Icon,
        public level: number = 0,
        public attack: number = 0,
        public defense: number = 0,
        public burst: number = 0
    ) {}
}
