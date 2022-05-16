const Reader = require("../../lib/utils/Reader");

describe("Prueba de Reader", () => {
    test("1. prueba de reader que regrese información", () => {
        const allAnimals = Reader.readJsonFile("dbAnimals.json");
        expect(allAnimals).not.toBeUndefined();
    });
});