import { Icon } from './icon.enum';
import { Class } from './class';
/**
 * Holds the data about a single side of a die
*/
export class DiceSide {
    public class: Class;
    public level: number;
    public attack: number;
    public defense: number;
    public burst: number;
    public icon: Icon[];
    public areIconsDivided: boolean;
}
