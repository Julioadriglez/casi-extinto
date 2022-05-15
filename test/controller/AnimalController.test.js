const AnimalController = require("../../lib/controller/AnimalController")

describe("Pruebas en AnimalServices", () =>{
    test("1. prueba de información de animales", () => {
        const dbAnimal = {id: 1, name: "tortuga"};
        const allAnimals = AnimalController.getAllAnimals(dbAnimal);
        expect(allAnimals.name).toBe("tortuga");
    });
});