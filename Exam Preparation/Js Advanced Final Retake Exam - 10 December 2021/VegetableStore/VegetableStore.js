class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {
        let uniques = new Set();
        vegetables.forEach(vegetable => {
            let [type, qty, price] = vegetable.split(' ');
            qty = Number(qty);
            price = Number(price);
            let isFound = false;
            for (let el of this.availableProducts) {
                if (el.type === type) {
                    isFound = true;
                    el.qty += qty;
                    if (el.price < price) {
                        el.price = price;
                    }
                }
            }
            if (isFound === false) {
                this.availableProducts.push({ type, qty, price });
            }
            uniques.add(type);
        });
        let typeOutput = [];
        uniques.forEach((value) => typeOutput.push(value));
        return `Successfully added ${typeOutput.join(', ')}`;
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach(product => {
            let [type, qty] = product.split(' ');
            qty = Number(qty);
            let isFound = false;
            for (let availableProduct of this.availableProducts) {
                if (availableProduct.type == type) {
                    isFound = true;
                    if (availableProduct.qty >= qty) {
                        availableProduct.qty -= qty;
                        totalPrice += qty * availableProduct.price;
                    } else {
                        throw new Error(`The quantity ${qty} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                    }
                    break;
                }
            }
            if (isFound === false) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }
    rottingVegetable(type, quantity) {
        for (let el of this.availableProducts) {
            if (el.type == type) {
                if (el.qty < quantity) {
                    el.qty = 0;
                    return `The entire quantity of the ${type} has been removed.`;
                } else {
                    el.qty -= quantity;
                    return `Some quantity of the ${type} has been removed.`;
                }
            }
        }
        throw new Error(`${type} is not available in the store.`);
    }
    revision() {
        let output = ['Available vegetables:'];
        let sorted = this.availableProducts.slice().sort((a, b) => a.price - b.price);
        sorted.forEach(el => output.push(`${el.type}-${el.qty}-$${el.price}`));
        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return output.join('\n');
    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

