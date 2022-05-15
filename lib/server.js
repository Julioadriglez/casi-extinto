const express = require("express");
const AnimalController = require("../lib/controller/AnimalController");
const Reader = require("../lib/utils/Reader");
const dbAnimal = Reader.readJsonFile("../dbAnimals.json");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Api Animales marinos en peligro de extinción "});
});

app.get("/v1/allAnimales", (req, res) => {
    const allAnimals = AnimalController.getAllAnimals(dbAnimal);
    res.json(allAnimals);
});
app.get("/v1/Animales/:name", (req, res) => {
    const name = req.params.name;
    const allAnimals = AnimalController.getAnimalFilter(dbAnimal, name);
    res.json(allAnimals);
});

app.listen(port, () => {
    console.log(`API in localhost:${port}`);
});