const AnimalService = require("../../lib/services/AnimalService")

describe("Pruebas en AnimalServices", () =>{
    test("1. prueba de información de animales", () => {
        const dbAnimal = {id: 1, name: "tortuga"};
        const allAnimals = AnimalService.allAnimals(dbAnimal);
        expect(allAnimals.name).toBe("tortuga");
    });
})