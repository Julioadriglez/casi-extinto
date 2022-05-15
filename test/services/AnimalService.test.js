const AnimalService = require("../../lib/services/AnimalService")

describe("Pruebas en AnimalServices", () =>{
    test("1. prueba de información de animales", () => {
        const dbAnimal = {id: 1, name: "tortuga"};
        const allAnimals = AnimalService.allAnimals(dbAnimal);
        expect(allAnimals.name).toBe("tortuga");
    });
    test("2. Filtro de animales por name ", () =>{
        const dbAnimal = [{id: 1, name: "tortuga"},{id: 2, name: "tortuga cahuamera"}, {id: 3, name: "foca"}];
        const allAnimals = AnimalService.animalFilter(dbAnimal,"tortuga")
        expect(allAnimals.name).toBe("tortuga")
    })
})