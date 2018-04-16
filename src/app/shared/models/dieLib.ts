import { DieSide } from './die-side';
import { Icon } from './icon.enum';
import { Die } from './die';

const q1 = new DieSide(Icon.Quiddity1);
const q2 = new DieSide(Icon.Quiddity2);
const assist = new DieSide(Icon.Ready, 0, 1, 1, 2);
const d2 = new DieSide(Icon.Draw2);
const d1 = new DieSide(Icon.Draw1);
const b1 = new DieSide(Icon.Ready, 1);
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
]);
