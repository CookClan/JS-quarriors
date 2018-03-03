import { DiceSide } from './dice-side';
import { error } from 'util';
import { Type } from './type';
/**
 * Holds the data about a Die
*/
export class Class {
    private intDiceSides: DiceSide[];
    private types: Type[] = [];
    constructor(diceSides: DiceSide[], public name: string, public readyIcon: string, public backColor: string, public color: string ) {
        this.diceSides = diceSides;
    }

    get diceSides() {
        return this.intDiceSides;
    }
    set diceSides(value: DiceSide[]) {
        if (value.length !== 6) {
            throw new error('dice must have six and only six sides');
        }
        this.intDiceSides = value;
    }
    AddType(value: Type): void {
        value.class = this;
        this.types.push(value);
    }
    ClearTypes(): void {
        this.types = [];
    }
}
