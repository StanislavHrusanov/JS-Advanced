class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (typeof model !== 'string' || model == '' || Number.isInteger(horsepower) === false
            || typeof horsepower !== 'number' || horsepower < 0 || price < 0 ||
            typeof price !== 'number' || mileage < 0 || typeof mileage !== 'number') {
            throw new Error('Invalid input!');
        }
        this.availableCars.push({ model, horsepower, price, mileage });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    sellCar(model, desiredMileage) {
        let isFound = false;
        let soldPrice = 0;
        let indexOfCar;

        for (let i = 0; i < this.availableCars.length; i++) {
            let car = this.availableCars[i];
            if (car.model === model) {
                isFound = true;
                indexOfCar = i;
                if (car.mileage <= desiredMileage) {
                    soldPrice = car.price;
                } else {
                    let difference = car.mileage - desiredMileage;
                    if (difference <= 40000) {
                        soldPrice = car.price * 0.95;
                    } else {
                        soldPrice = car.price * 0.90;
                    }
                }
                break;
            }
        }
        if (isFound === false) {
            throw new Error(`${model} was not found!`);
        }
        let carToRemove = this.availableCars.splice(indexOfCar, 1)[0];
        this.soldCars.push({
            model: carToRemove.model,
            horsepower: carToRemove.horsepower,
            soldPrice: soldPrice
        });
        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }
    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars"
        } else {
            let output = `-Available cars:\n`;
            let cars = [];
            this.availableCars.forEach(car => cars.push(`---${car.model} - ${car.horsepower} HP - ${(car.mileage).toFixed(2)} km - ${(car.price).toFixed(2)}$`));
            output += cars.join('\n');

            return output;
        }
    }
    salesReport(criteria) {
        let output = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:`;
        if (criteria == 'horsepower') {
            let sorted = this.soldCars.slice().sort((a, b) => b.horsepower - a.horsepower);
            sorted.forEach(car => output += `\n---${car.model} - ${car.horsepower} HP - ${(car.soldPrice).toFixed(2)}$`);
            return output;
        } else if (criteria == 'model') {
            let sorted = this.soldCars.slice().sort((a, b) => a.model.localeCompare(b.model));
            sorted.forEach(car => output += `\n---${car.model} - ${car.horsepower} HP - ${(car.soldPrice).toFixed(2)}$`);
            return output;
        } else {
            throw new Error('Invalid criteria!');
        }
    }
}