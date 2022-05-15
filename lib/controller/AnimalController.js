const AnimalService = require("../services/AnimalService");
class AnimalController{
    static getAllAnimals(dbAnimal){
        const allAnimals = AnimalService.allAnimals(dbAnimal);
        return allAnimals;
    };
};
module.exports = AnimalController;