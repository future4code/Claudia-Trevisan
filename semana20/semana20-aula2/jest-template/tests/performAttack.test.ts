import { performAttack } from "../src/performAttack";
import { Character } from "../src/validateCharacter";

export const validatorMockTrue = jest.fn((input: any): any =>{
    return true
})

export const validatorMockFalsy = jest.fn((input: any): any =>{
    return false
})


describe("testing perform attack", () =>{

    test("should perform attack", () =>{

        const mockValidator = validatorMockTrue

        const attacker: Character = {
            name: "Scorpion",
            life: 1500,
            strength: 600,
            defense: 200
        };
    
        const defender: Character = {
            name: "Kitana",
            life: 1500,
            strength: 800,
            defense: 400
        };

        performAttack(attacker, defender, mockValidator as any)

        expect(defender.life).toEqual(1300);
        expect(mockValidator).toHaveBeenCalled();
        expect(mockValidator).toHaveBeenCalledTimes(2);
        expect(mockValidator).toHaveReturnedTimes(2)
    })

    test("Should return error", () =>{
        expect.assertions(4);
        const mockValidator = validatorMockFalsy
    
        const attacker: Character = {
          name: "Scorpion",
          life: 1500,
          defense: 0,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 0,
        };
    
        try {
          performAttack(attacker, defender, mockValidator as any);
        } catch (error) {
          expect(error.message).toBe("invalid character");
          expect(mockValidator).toHaveBeenCalled();
          expect(mockValidator).toHaveBeenCalledTimes(1);
          expect(mockValidator).toHaveReturnedTimes(1);
        }
    });
})