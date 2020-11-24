import { Character, validateCharacter } from "./validateCharacter";

export const performAttack = (
    attacker: Character, 
    defender: Character, 
    validator: (input: Character) => boolean) =>{

    if(!validator(attacker) || !validator(defender)){
        throw new Error("invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }

}