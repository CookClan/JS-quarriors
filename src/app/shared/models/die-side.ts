import { Icon } from './icon.enum';
import { Die } from './die';
/**
 * Holds the data about a single side of a die
*/
export class DieSide {
    public die: Die;
    constructor(
        public icon: Icon,
        public level: number = 0,
        public attack: number = 0,
        public defense: number = 0,
        public burst: number = 0
        
    ) {}
    get color(){
    	if (this.die){
	  return this.die.color;
	}		
	else{
	  return 'black';
	}
    }
	get backColor(){
	if (this.die){
	  return this.die.backColor;
	} else {
	  return 'white';
	}
    }
}
