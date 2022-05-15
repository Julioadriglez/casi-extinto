const AnimalService = require("../services/AnimalService");
class AnimalController{
    static getAllAnimals(dbAnimal){
        const allAnimals = AnimalService.allAnimals(dbAnimal);
        return allAnimals;
    }
    static getAnimalFilter(dbAnimal, name){
        const allAnimals = AnimalService.animalFilter(dbAnimal, name);
        return allAnimals;
    }
}

module.exports = AnimalController;