function storeCatalogue(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    const catalogue = {};

    for (let line of arr) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        let firstLetter = product[0];

        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = {};
        }
        catalogue[firstLetter][product] = price;
    }
    Object.keys(catalogue).forEach(letter => {
        console.log(letter);
        Object.entries(catalogue[letter]).forEach(product => console.log(` ${product.join(': ')}`));
    });
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);