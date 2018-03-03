import { Icon } from './icon.enum';
/**
 * Holds the data about a single side of a die
*/
export class DiceSide {
    public level: number;
    public attack: number;
    public defense: number;
    public burst: number;
    public icon: Icon;
}
