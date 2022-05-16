const AnimalController = require("../../lib/controller/AnimalController");

describe("Pruebas en AnimalController", () =>{
    test("1. Prueba de información de animales", () => {
        const dbAnimal = {id: 1, name: "tortuga"};
        const allAnimals = AnimalController.getAllAnimals(dbAnimal);
        expect(allAnimals.name).toBe("tortuga");
    });
    test("2. Filtro de animales por name ", () =>{
        const dbAnimal = [{id: 1, name: "tortuga"},{id: 2, name: "tortuga cahuamera"}, {id: 3, name: "foca"}];
        const recibeDbanimal =  [{id: 1, name: "tortuga"}];
        const allAnimals = AnimalController.getAnimalFilter(dbAnimal,"tortuga");
        expect(allAnimals).toEqual(recibeDbanimal);
    });
});