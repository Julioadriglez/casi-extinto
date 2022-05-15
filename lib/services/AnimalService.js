class AnimalService{
    static allAnimals(dbAnimal){
        return dbAnimal;
    };
    static animalFilter(dbAnimal,name){
        const allAnimals = dbAnimal.filter((animal) => animal.name === name);
        return allAnimals;
    };
}

module.exports = AnimalService;