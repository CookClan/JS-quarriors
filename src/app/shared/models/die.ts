import { DieSide } from './die-side';
import { error } from 'util';
import { Type } from './type';
/**
 * Holds the data about a Die
*/
export class Die {
    private intSides: DieSide[];
    constructor(dieSides: DieSide[], public readyIcon: string, public backColor: string, public color: string ) {
        this.sides = dieSides;
    }

    get sides() {
        return this.intSides;
    }
    set sides(value: DieSide[]) {
        if (value.length !== 6) {
            throw new error('dice must have six and only six sides');
        }
        this.intSides = value.slice();
        this.intSides.forEach(side => {
            side.die = this;
        });
    }
}
