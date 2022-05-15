class AnimalController{
    static getAllAnimals(dbAnimal){
        const allAnimals = AnimalService.allAnimals(dbAnimal);
        return allAnimals;
    } 
}