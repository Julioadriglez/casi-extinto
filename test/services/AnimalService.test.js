const AnimalServices = require("")
const { TestScheduler } = require("jest")

describe("Pruebas en AnimalServices", () =>{
    test("1. prueba de información de animales", () => {
        const allAnimals = AnimalService.allAnimals(dbAnimal);
        espect(allAnimals).toBe("tortuga");
    });
})