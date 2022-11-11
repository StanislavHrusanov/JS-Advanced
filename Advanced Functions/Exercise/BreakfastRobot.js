function solution() {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    return function manage(str) {
        let [command, ingrOrRecipe, qty] = str.split(' ');
        qty = Number(qty);

        if (command == 'restock') {
            return restock(ingrOrRecipe, qty);

        } else if (command == 'prepare') {
            return prepare(ingrOrRecipe, qty);

        } else if (command == 'report') {
            return report();
        }
    }

    function restock(ingredient, qty) {
        ingredients[ingredient] += qty;
        return 'Success';
    }

    function prepare(recipe, qty) {
        let neededIngredients = Object.entries(recipes[recipe])
        neededIngredients.forEach(arr => arr[1] *= qty);

        for (let arr of neededIngredients) {
            let neededIngredient = arr[0];
            let neededQty = arr[1];

            if (ingredients[neededIngredient] < neededQty) {
                return `Error: not enough ${neededIngredient} in stock`;
            }
        }
        neededIngredients.forEach(arr => {
            ingredients[arr[0]] -= arr[1];
        });
        return 'Success';
    }

    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }
}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

