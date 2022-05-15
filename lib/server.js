cosnt express = require("express")
const AnimalController = require("../lib/controller/AnimalController");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Api Animales marinos en peligro de extinción "});
});

app.get("/v1/allAnimales", (req, res) => {
    const allAnimals = AnimalService.allAnimals(dbAnimal)
    res.json(allAnimals);

app.listen(port, () => {
    console.log(`API in localhost:${port}`);
});