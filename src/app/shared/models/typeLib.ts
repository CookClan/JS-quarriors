import {Type} from './type';
import { Die } from './die';
import { DieSide } from './die-side';
import { Icon } from './icon.enum';
import * as shuffle from 'shuffle-array';

const q1 = new DieSide(Icon.Quiddity1);
const q2 = new DieSide(Icon.Quiddity2);
const r112 = new DieSide(Icon.Ready, 1, 1, 2);
const d2 = new DieSide(Icon.Draw2);
const d1 = new DieSide(Icon.Draw1);
const basics: [Type, number][] = [
    [
        new Type(new Die([ q1, q1, q1, q1, q1, q2], '', 'white', 'blue'), 'Basic Quiddity', '', 1, 1, []),
        0
    ],
    [
        new Type(new Die([ q1, q1, q1, new DieSide(Icon.ReRoll, 0, 0, 0, 1), r112, r112], '', 'brown', 'white'), 'Assistant', '', 1, 1, []),
        2
    ],
    [
        new Type(new Die([ q1, d1, d1, d2, d2, d2], '', 'yellow', 'black'), 'Portal', '', 1, 1, []),
        5
    ],
];

const spells: [Type, number][] = [];
const creatures: [Type, number][] = [];

export function getRandomType(section: string, count: number): [Type, number][] {
    if (section === 'Basic') {
        return basics;
    } else if (section === 'Spell') {
        return getRandom(spells.splice(0), count);
    } else if (section === 'Creature') {
        return getRandom(creatures.splice(0), count);
    } else {
        throw new Error(`Did not recognize section name ${section}`);
    }
}

export function getRandom(pool: [Type, number][], count: number): [Type, number][] {
    if (count < 1 || Math.floor(count) !== count) {
        throw new Error('Invalid count');
    }
    if (pool.length < count) {
        throw new Error('Not Enough canidates');
    }
    shuffle(pool);
    const ret = [pool.pop()];
    count--;
    while (count > 0) {
        const canidate = pool.pop();
        let valid = true;
        for (const card of ret) {
            if (card[0].die === canidate[0].die) {
                valid = false;
                break;
            }
        }
        if (valid) {
            ret.push(canidate);
            count--;
        }
        if (pool.length < count) {
            throw new Error('Ran out of canidates');
        }
    }
    return ret;
}
