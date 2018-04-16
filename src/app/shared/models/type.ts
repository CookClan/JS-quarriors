import { Die } from './die';
import { Icon } from './icon.enum';
/**
 * Holds the data about a Card
*/
export class Type {
    private intAbilities: string[];

    constructor(private intDie: Die,
        private baseName: string,
        private typeName: string,
        private intCost: number,
        private intGlory: number = 0,
        intAbilities: string[],
        private nameIsSufix: boolean = false,
        private rawDescription: string = ''
    ) {
        this.intAbilities = intAbilities.slice();
    }
    get die(): Die {
        return this.intDie;
    }
    get name(): string {
        if (this.typeName.length > 0) {
            const names = [this.typeName, this.baseName];
            return (this.nameIsSufix ? names.reverse() : names).join(' ');
        } else {
            return this.baseName;
        }
    }
    get cost(): number {
        return this.intCost;
    }
    get glory(): number {
        return this.intGlory;
    }
    get abilities(): string[] {
        return this.intAbilities;
    }
    get description(): string[] {
        const description = [];
        if (this.rawDescription.length > 0) {
            description.push(this.rawDescription);
        }
        if (this.abilities.length > 0) {
            const maxBurst: number = Math.max.apply(Math, this.die.sides.map(function(s) { return s.burst; }));
            const allBurst: boolean = this.die.sides.every((value) => !(value.icon === Icon.Ready && value.burst === 0));
            if (allBurst && this.abilities.length === 1) {
                description.push(this.generateBurstPrefix(maxBurst, 0) + this.abilities[0].replace(/\{0\}/g, this.baseName));
            } else {
                for (let j = 0; j < this.abilities.length; j++) {
                    if (this.abilities[j].length > 0) {
                        // have abilities store the description in it's own class
                        description.push(this.generateBurstPrefix(1, j - 1) + this.abilities[j].replace(/\{0\}/g, this.baseName));
                    }
                }
                if (this.abilities.length <= maxBurst ) {
                    description.push(`${this.generateBurstPrefix(maxBurst - this.abilities.length + 1, this.abilities.length - 1)}\
${this.baseName} has no additional ability.`);
                }
            }
        }
        return description;
    }

    private generateBurstPrefix(count: number, offset: number): string {
        const bursts: number[] = [];
        for (let i = 0; i < count; i++) {
            bursts.push(i + offset + 1);
        }
        const ret = bursts.map(function(v) { return Array(v + 1).join('*'); }).join('/');
        return ret.length === 0 ? ret : ret + ' ';
    }
}
