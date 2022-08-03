function fruit(fruitType, weightInGrams, pricePerKilo) {
    let weightInKiloes = weightInGrams / 1000;
    let totalBill = weightInKiloes * pricePerKilo;

    console.log(`I need $${totalBill.toFixed(2)} to buy ${weightInKiloes.toFixed(2)} kilograms ${fruitType}.`);
}
fruit('orange', 2500, 1.80);