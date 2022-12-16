class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }
        const plant = {
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        }
        this.plants.push(plant);
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName, quantity) {
        let isFound = false;
        let isRiped = false;
        for (let plant of this.plants) {
            if (plant.plantName === plantName) {
                isFound = true;
                if (plant.ripe) {
                    isRiped = true;
                }
                break;
            }
        }

        if (isFound === false) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (isRiped) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        for (let plant of this.plants) {
            if (plant.plantName === plantName) {
                plant.ripe = true;
                plant.quantity += quantity;
            }
        }

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }
    harvestPlant(plantName) {
        let isFound = false;
        let isRiped = false;
        let indexOfPlant;
        for (let i = 0; i < this.plants.length; i++) {
            let plant = this.plants[i];
            if (plant.plantName === plantName) {
                isFound = true;
                if (plant.ripe) {
                    isRiped = true;
                    indexOfPlant = i;
                }
                break;
            }
        }
        if (isFound === false) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (isRiped === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let plantToRemove = this.plants.splice(indexOfPlant, 1);
        this.storage.push({
            plantName: plantToRemove[0].plantName,
            quantity: plantToRemove[0].quantity
        });
        this.spaceAvailable += plantToRemove[0].spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport() {
        const output = [];

        output.push(`The garden has ${this.spaceAvailable} free space left.`);

        let plantsInTheGarden = `Plants in the garden: `;
        let sortedPlants = this.plants.slice().sort((a, b) => a.plantName.localeCompare(b.plantName));
        const nameOfSprtedPlants = [];
        sortedPlants.forEach(plant => nameOfSprtedPlants.push(plant.plantName));
        plantsInTheGarden += nameOfSprtedPlants.join(', ');
        output.push(plantsInTheGarden);

        let plantsInTheStorage = ``;
        if (this.storage.length > 0) {
            let storagePlants = `Plants in storage: `;
            const plantNamesAndQty = [];
            this.storage.forEach(plant => plantNamesAndQty.push(`${plant.plantName} (${plant.quantity})`));
            storagePlants += plantNamesAndQty.join(', ');
            plantsInTheStorage = storagePlants;
        } else {
            plantsInTheStorage = 'Plants in storage: The storage is empty.';
        }
        output.push(plantsInTheStorage);

        return output.join('\n');
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());








