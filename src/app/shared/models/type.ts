import { Class } from './class';
/**
 * Holds the data about a Card
*/
export class Type {
    class: Class; //the die that this type binds to
    name: string;// strong, mighty, spell, charm
    nameIsSuffix: boolean; //this is used to allow the type name to be joined with the class name in the correct order
    description: string; // portal is the only one that really needs this, all other cards derive their description from their abilities.
    cost: number; //displayed in the top left of the card
    glory: number; //displayed in the top right of card
    bursts: any[]; //will hold ability information, abilities will have descriptions applied to them that will be displayed with the description above
}
