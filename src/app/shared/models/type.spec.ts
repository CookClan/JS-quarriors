import { Type } from './type';
import { Die } from './die';
import { DieSide } from './die-side';
import { Icon } from './icon.enum';
const q1 = new DieSide(Icon.Quiddity1);
const q2 = new DieSide(Icon.Quiddity2);
describe('TypeModel', () => {
    let model: Type;
    beforeEach(() => {
        model = new Type(new Die(
            [
                q1,
                q2,
                q2,
                new DieSide(Icon.Ready, 0, 1, 2, 5),
                new DieSide(Icon.Ready, 0, 2, 3, 6),
                new DieSide(Icon.Ready, 2, 3, 4, 8),
            ],
        '', 'red', 'red'),
        'Questing Wizard',
        '', 8, 3, []);
    });
    it('should create', function() {
        expect(model).toBeTruthy();
    });
    it('should set cost to 8', function() {
        expect(model.cost).toBe(8);
    });
    it('should set glory to 3', function() {
        expect(model.glory).toBe(3);
    });
});
describe('TypeModel Strong Questing Wizard', () => {
    let model: Type;
    beforeEach(() => {
        model = new Type(
            new Die(
                [
                    q1,
                    q2,
                    q2,
                    new DieSide(Icon.Ready, 1, 2, 5),
                    new DieSide(Icon.Ready, 2, 3, 6),
                    new DieSide(Icon.Ready, 3, 4, 8, 2),
                ], '', 'red', 'red'),
            'Questing Wizard',
            'Strong',
            8,
            3,
            ['When {0} scores, you may cull any number of Spell Dice from your Active Pool or Ready Area for 1 Glory each \
(even if they were not attached to {0}).']);
    });
    it('should describe Strong Questing Wizard', function() {
        expect(model.description).toEqual(['When Questing Wizard scores, you may cull any number of Spell Dice from your Active Pool or \
Ready Area for 1 Glory each (even if they were not attached to Questing Wizard).',
        '*/** Questing Wizard has no additional ability.']);
    });
    it('should name Strong Questing Wizard', function() {
        expect(model.name).toBe('Strong Questing Wizard');
    });
});

describe('TypeModel Mighty Questing Wizard', () => {
    let model: Type;
    beforeEach(() => {
        model = new Type( new Die(
            [
                q1,
                q2,
                q2,
                new DieSide(Icon.Ready, 1, 2, 5),
                new DieSide(Icon.Ready, 2, 3, 6),
                new DieSide(Icon.Ready, 3, 4, 8, 2),
            ],
            '', 'red', 'red'),
            'Questing Wizard',
            'Mighty',
            8,
            4,
            ['When {0} scores, all Quarry dice cost you 2 less Quiddity to capture this turn, \
and you may capture 1 additional Quarry die this turn.',
            'You may spend {0} as an Immediate Effect to draw and roll 2 dice from your bag (instead of gaining Quiddity)']);
    });
    it('should describe Mighty Questing Wizard', function() {
        expect(model.description).toEqual(['When Questing Wizard scores, all Quarry dice cost you 2 less Quiddity to capture this turn, \
and you may capture 1 additional Quarry die this turn.',
        '* You may spend Questing Wizard as an Immediate Effect to draw and roll 2 dice from your bag (instead of gaining Quiddity)',
        '** Questing Wizard has no additional ability.']);
    });
});

describe('TypeModel Quiddity', () => {
    let model: Type;
    beforeEach(() => {
        model = new Type(
            new Die(
                [q1, q1, q1, q1, q1, q2],
                '',
                'white',
                'blue'),
            'Quiddity',
            '',
            0,
            0,
            []);
    });
    it('should describe Quiddity', function() {
        expect(model.description).toEqual([]);
    });
    it('should name Quiddity', function() {
        expect(model.name).toBe('Quiddity');
    });
});

describe('TypeModel Portal', () => {
    let model: Type;
    beforeEach(() => {
        model = new Type(
            new Die(
                [q1, new DieSide(Icon.Draw1), new DieSide(Icon.Draw1),
                    new DieSide(Icon.Draw2), new DieSide(Icon.Draw2), new DieSide(Icon.Draw2)],
                '',
                'yellow',
                'black'),
            'Portal',
            '',
            0,
            0,
            [],
        false, 'p1 Immediate: draw and roll one die \n p2 Immediate: draw and roll one die');
    });
    it('should describe Portal', function() {
        expect(model.description).toEqual(['p1 Immediate: draw and roll one die \n p2 Immediate: draw and roll one die']);
    });
    it('should name Portal', function() {
        expect(model.name).toBe('Portal');
    });
});

describe('TypeModel Defender of the Pale', () => {
    let model: Type;
    beforeEach(() => {
        model = new Type(
            new Die(
                [q1, q2, q2, new DieSide(Icon.Ready, 1, 5, 1, 1),
                    new DieSide(Icon.Ready, 2, 2, 6, 1),
                    new DieSide(Icon.Ready, 3, 2, 8, 2)],
                '',
                'blue',
                'grey'),
            'Defender of the Pale',
            '',
            5,
            2,
            ['When the {0} scores, you earn 1 additional Glory for each other Creature that scores this turn']);
    });
    it('should describe Defender of the Pale', function() {
        expect(model.description).toEqual(['*/** When the Defender of the Pale scores, you earn 1 additional Glory \
for each other Creature that scores this turn']);
    });
    it('should name Defender of the Pale', function() {
        expect(model.name).toBe('Defender of the Pale');
    });
});

describe('TypeModel Assistant', () => {
    let model: Type;
    beforeEach(() => {
        model = new Type(
            new Die(
                [q1, q1, q1, new DieSide(Icon.ReRoll, 1),
                    new DieSide(Icon.Ready, 1, 1, 2),
                    new DieSide(Icon.Ready, 1, 1, 2)],
                '',
                'blue',
                'grey'),
            'Assistant',
            '',
            1,
            1,
            ['', 'Immediate: re-roll this die and one other die']);
    });
    it('should describe Assistant', function() {
        expect(model.description).toEqual(['* Immediate: re-roll this die and one other die']);
    });
    it('should name Assistant', function() {
        expect(model.name).toBe('Assistant');
    });
});

describe('TypeModel Life Cantrip', () => {
    let model: Type;
    beforeEach(() => {
        model = new Type(
            new Die(
                [q1, q2, q2, new DieSide(Icon.Ready),
                    new DieSide(Icon.Ready),
                    new DieSide(Icon.Ready)],
                '',
                'blue',
                'grey'),
            'Life',
            'Cantrip',
            1,
            1,
            ['Attach: This Creature gains +4 defense'],
            true);
    });
    it('should describe Life Cantrip', function() {
        expect(model.description).toEqual(['Attach: This Creature gains +4 defense']);
    });
    it('should name Life Cantrip', function() {
        expect(model.name).toBe('Life Cantrip');
    });
});
