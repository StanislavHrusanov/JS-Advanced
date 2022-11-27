function autoEngeneeringCompany(arr) {
    const carRegister = {};

    arr.forEach(line => {
        const [brand, model, qty] = line.split(' | ');

        if (!carRegister.hasOwnProperty(brand)) {
            carRegister[brand] = {};
        }
        if (!carRegister[brand].hasOwnProperty(model)) {
            carRegister[brand][model] = 0;
        }
        carRegister[brand][model] += Number(qty);
    });

    for (const brand in carRegister) {
        console.log(brand);
        Object.entries(carRegister[brand]).forEach(el => console.log(`###${el[0]} -> ${el[1]}`));
    }
}
autoEngeneeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);