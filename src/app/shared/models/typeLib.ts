import {Type} from './type';
import * as shuffle from 'shuffle-array';
import { DICE } from './dieLib';


const basics: [Type, number][] = [
    [
        new Type(DICE.get('Quiddity'), 'Quiddity', 'Basic', 0, 0, []),
        0
    ],
    [
        new Type(DICE.get('Assistant'), 'Assistant', '', 1, 1,
        ['Immediate: Re-roll this die and one other die.']),
        2
    ],
    [
        new Type(DICE.get('Portal'), 'Portal', '', 4, 0, [], false,
        'p1 Immediate: draw and roll one die \n p2 Immediate: draw and roll one die'),
        5
    ],
];
const spells: Type[] = [
    new Type(DICE.get('Death'), 'Death', 'Spell', 6, 0, [
        'Cast this spell to Destroy one Creature with defense 6 or less in each of your oppenents\' Ready Areas.',
    ], true),
    new Type(DICE.get('Death'), 'Death', 'Cantrip', 4, 0, [
        'Cast this Spell to give all Creatures in your Ready Area +2 attack for the remainder of this turn.',
        'Cast this Spell to give all Creatures in your Ready Area +3 attack for the remainder of this turn.'
    ], true),
    new Type(DICE.get('Death'), 'Death', 'Charm', 5, 0, [
        'Attach: This Creature gains +3 attack and +3 defense.',
        'Attach: This Creature gains +5 attack and +5 defense.'
    ], true),
    new Type(DICE.get('Death'), 'Death', 'Incantation', 5, 0, [
        'Cast this Spell to Destroy one Creature of Level 2 or less.',
        'Cast this Spell to Destroy one Creature of any Level'
    ], true),
    new Type(DICE.get('Growth'), 'Growth', 'Spell', 4, 0, [
        'Immediate: Gain 2 Quiddity. Draw and roll 1 die.'
    ], true),
    new Type(DICE.get('Growth'), 'Growth', 'Cantrip', 3, 0, [
        'Immediate: Gain 2 Quiddity. You may capture 1 additional Quarry die this turn.'
    ], true),
    new Type(DICE.get('Growth'), 'Growth', 'Charm', 5, 0, [
        'Cast this spell to gain 3 Quiddity.'
    ], true),
    new Type(DICE.get('Growth'), 'Growth', 'Incantation', 5, 0, [
        'Immediate: Gain 2 Quiddity. You may re-roll any 2 other dice.'
    ], true),
    new Type(DICE.get('Life'), 'Life', 'Spell', 4, 0, [
        'Attach: This Creature gains +4 defense.'
    ], true),
    new Type(DICE.get('Life'), 'Life', 'Cantrip', 3, 0, [
        'Immediate: Gain 2 Quiddity. You may capture 1 addition Quarry die this turn.'
    ], true),
    new Type(DICE.get('Life'), 'Life', 'Charm', 3, 0, [
        // tslint:disable-next-line:max-line-length
        'Reaction: When you cast this spell, any of your Creatures that are destroyed for the rest of the turn go to your Active Pool instaed of your Used Pile.'
    ], true),
    new Type(DICE.get('Life'), 'Life', 'Incantation', 4, 0, [
        'Reaction: Cast this Spell to Reduce one Creature\'s attack to 0 (against all players) for the remainder of this turn.'
    ], true),
    new Type(DICE.get('Shaping'), 'Shaping', 'Spell', 3, 0, [
        'Cast this Spell to destroy one Spell in any player\'s Ready Area.'
    ], true),
    new Type(DICE.get('Shaping'), 'Shaping', 'Cantrip', 4, 0, [
        // tslint:disable-next-line:max-line-length
        'Reaction: Cast this Spell to return one of your just destroyed Creatures to your Ready Area (at its same level) instead of putting it in the Used Pile.'
    ], true),
    new Type(DICE.get('Shaping'), 'Shaping', 'Charm', 3, 0, [
        'Cast this Spell to rotate all Creatures in your Ready Area up 1 Level, if possible.'
    ], true),
    new Type(DICE.get('Shaping'), 'Shaping', 'Incantation', 4, 0, [
        // tslint:disable-next-line:max-line-length
        'Attach: When this Creature scores, you may cull one die from your Used Pile to capture one Quarry die that costs up to 3 Quiddity more than the die you culled.'
    ], true),
    new Type(DICE.get('Victory'), 'Victory', 'Spell', 7, 0, [
        // tslint:disable-next-line:max-line-length
        'Cast this spell to gain +1 Glory for each opponent that had a Creature destroyed by one of your attacks this turn (maximum 1 Glory per player attacked). You can only cast this Spell after your attack phase.'
    ], true),
    new Type(DICE.get('Victory'), 'Victory', 'Cantrip', 3, 0, [
        'Attach: This Creature gains +2 Glory when scored.'
    ], true),
    new Type(DICE.get('Victory'), 'Victory', 'Charm', 5, 0, [
        // tslint:disable-next-line:max-line-length
        'Cast this Spell to gain +1 Glory for each Creature that scored this turn. You can only cast this Spell if you scored with 2 or more Creatures this turn.'
    ], true),
    new Type(DICE.get('Victory'), 'Victory', 'Incantation', 9, 0, [
        'Cast this spell to Gain +3 Glory.'
    ], true),
];
const creatures: Type[] = [
    [
        new Type(DICE.get('Deathdealer'), 'Deathdealer', '', 3, 2, ['When Deathdealer scores, you may trade Deathdealer for one die from any other player\'s Used Pile'])
    ],
    [
        new Type(DICE.get('Defender of the Pale'), 'Defender of the Pale', '', 5, 2, ['When Defender of the Pale scores, you earn 1 additional Glory for each other Creature that scores this turn'])
    ],
    [
        new Type(DICE.get('Devotee of the Holy Query'), 'Devotee of the Holy Query', '', 3, 2, ['Devotee of the Holy Query gains +2 defense'])
    ],
    [
        new Type(DICE.get('Ghostly Spirit'), 'Ghostly Spirit', '', 3, 2, ['Place holder'])
    ],
    [
        new Type(DICE.get('Primordial Ooze'), 'Primordial Ooze', '', 3, 2, ['Place holder'])
    ],
    [
        new Type(DICE.get('Quake Dragon'), 'Quake Dragon', '', 3, 2, ['Place holder'])
    ],
    [
        new Type(DICE.get('Questing Wizard'), 'Questing Wizard', '', 3, 2, ['Place holder'])
    ],
    [
        new Type(DICE.get('Scavenging Goblin'), 'Scavenging Goblin', '', 3, 2, ['Place holder'])
    ],
    [
        new Type(DICE.get('Warrior of the Quay'), 'Warrior of the Quay', '', 3, 2, ['Place holder'])
    ],
    [
        new Type(DICE.get('Witching Hag'), 'Witching Hag', '', 3, 2, ['Place holder'])
    ]
];

export function getRandomType(section: string, count: number): [Type, number][] {
    console.log(section);
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

export function getRandom(pool: Type[], count: number): [Type, number][] {
    if (count < 1 || Math.floor(count) !== count) {
        throw new Error('Invalid count');
    }
    shuffle(pool);
    const ret: [Type, number][] = [];
    while (count > 0) {
        if (pool.length < count) {
          if (ret.length > 0) {
            throw new Error('Ran out of canidates');
          } else {
            throw new Error('Not enough canidates');
          }
        }
        const canidate = pool.pop();
        let valid = true;
        for (const card of ret) {
            if (card[0].die === canidate.die) {
                valid = false;
                break;
            }
        }
        if (valid) {
            ret.push([canidate, 5]);
            count--;
        }
    }
    return ret;
}
