import { DieSide } from './die-side';
import { Icon } from './icon.enum';
import { Die } from './die';

const q1 = new DieSide(Icon.Quiddity1);
const q2 = new DieSide(Icon.Quiddity2);
const assist = new DieSide(Icon.Ready, 1, 1, 2, 0);
const d2 = new DieSide(Icon.Draw2);
const d1 = new DieSide(Icon.Draw1);
const b1 = new DieSide(Icon.Ready, 0, 0, 0, 1);
const spell = new DieSide(Icon.Ready);
const spellDieSides = [q1, q2, q2, spell, spell, spell];
export const DICE: Map<string, Die> = new Map<string, Die>([
    ['Quiddity', new Die([ q1, q1, q1, q1, q1, q2], '', 'white', 'blue')],
    ['Assistant', new Die([ q1, q1, q1, new DieSide(Icon.ReRoll, 1), assist, assist], '', 'brown', 'white')],
    ['Portal', new Die([ q1, d1, d1, d2, d2, d2], '', 'yellow', 'black')],
    ['Death', new Die([q1, q2, q2, b1, b1, new DieSide(Icon.Ready, 2) ], '', 'purple', 'white')],
    ['Growth', new Die(spellDieSides, '', 'green', 'white')],
    ['Life', new Die(spellDieSides, '', 'blue', 'white')],
    ['Shaping', new Die([q2, q2, d2, spell, spell, spell], '', 'pink', 'white')],
    ['Victory', new Die([q1, q2, d2, new DieSide(Icon.ReRollAndDraw1), spell, spell], '', 'orange', 'white')],
    ['Deathdealer', new Die([q1, q2, q2, new DieSide(Icon.Ready, 1, 3, 2, 0), new DieSide(Icon.Ready, 1, 3, 2), new DieSide(Icon.Ready, 2, 4, 4)], '', 'black', 'red')],
    ['Defender of the Pale', new Die([q1, q2, q2, new DieSide(Icon.Ready, 1, 1, 5, 1), new DieSide(Icon.Ready, 2, 2, 6, 1), new DieSide(Icon.Ready, 3, 2, 8, 2)], '', 'blue', 'white')],
    ['Devotee of the Holy Query', new Die([q1, q2, new DieSide(Icon.Ready, 1, 0, 3), new DieSide(Icon.Ready, 1, 0, 3), new DieSide(Icon.Ready, 2, 2, 4), new DieSide(Icon.Ready, 2, 2, 4, 1)], '', 'white', 'gold')],
    ['Ghostly Spririt', new Die([q1, q1, q2, new DieSide(Icon.Ready, 1, 2, 2), new DieSide(Icon.Ready, 1, 2, 2), new DieSide(Icon.Ready, 2, 3, 3)], '', 'white', 'black')],
    ['Primordial Ooze', new Die([q1, q2, q2, new DieSide(Icon.Ready, 2, -1, -1), new DieSide(Icon.Ready, 2, -1, -1), new DieSide(Icon.Ready, 2, -1, -1)], '', 'green', 'white')],
    ['Quake Dragon', new Die([q1, q2, new DieSide(Icon.Quiddity3OrReRoll), new DieSide(Icon.Ready, 1, 4, 4), new DieSide(Icon.Ready, 2, 6, 6, 1), new DieSide(Icon.Ready, 3, 8, 7, 2)], '', 'darkred', 'white')],
    ['Questing Wizard', new Die([new DieSide(Icon.Quiddity1AndDraw1), q2, new DieSide(Icon.Quiddity2, 0, 0, 0, 1), new DieSide(Icon.Ready, 1, 2, 5), new DieSide(Icon.Ready, 2, 3, 6), new DieSide(Icon.Ready, 3, 4, 8, 2)], '', 'lightskyblue', 'white')],
    ['Scavenging Goblin', new Die([q1, q1, new DieSide(Icon.Ready, 1, 2, 2), new DieSide(Icon.Ready, 1, 2, 2), new DieSide(Icon.Ready, 1, 2, 2, 1), new DieSide(Icon.Ready, 1, 2, 2, 1)], '', 'darkgreen', 'khaki')],
    ['Warrior of the Quay', new Die([q1, q2, q2, new DieSide(Icon.Ready, 1, 2, 3), new DieSide(Icon.Ready, 1, 2, 3), new DieSide(Icon.Ready, 2, 3, 4)], '', 'red', 'white')],
    ['Witching Hag', new Die([q1, q2, q2, new DieSide(Icon.Ready, 1, 3, 3), new DieSide(Icon.Ready, 1, 3, 3), new DieSide(Icon.Ready, 2, 4, 5)], '', 'purple', 'green')]
]);
