import { validateCharacter } from "../src/validateCharacter";

describe("testing validateCharacter", () =>{

    test("Must return error in case name value empty", () =>{

        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
          });
      
        expect(result).toBe(false);
    });

    test("Must return error in case life value 0", () =>{

        const result = validateCharacter({
            name: "mimimi",
            life: 0,
            strength: 300,
            defense: 500,
          });
      
        expect(result).toBe(false);
    });

    test("Must return error in case strength value 0", () =>{

        const result = validateCharacter({
            name: "mimimi",
            life: 1500,
            strength: 0,
            defense: 500,
          });
      
        expect(result).toBe(false);
    });

    test("Must return error in case defense value 0", () =>{

        const result = validateCharacter({
            name: "mimimi",
            life: 1500,
            strength: 300,
            defense: 0,
          });
      
        expect(result).toBe(false);
    });

    test("Must return true in case all properties inputs valid", () =>{

        const result = validateCharacter({
            name: "mimimi",
            life: 1500,
            strength: 300,
            defense: 500,
          });
      
        expect(result).toBe(true);
    });
})