function juiceFlavors(arr) {
    const juices = {};
    const bottles = {};

    for (let juice of arr) {
        let [flavor, qty] = juice.split(' => ');

        if (!juices.hasOwnProperty(flavor)) {
            juices[flavor] = 0;
        }
        juices[flavor] += Number(qty);
        produceBottle(flavor);
    }

    for (let flavor in bottles) {
        console.log(`${flavor} => ${bottles[flavor]}`);
    }

    function produceBottle(flavor) {
        if (juices[flavor] >= 1000) {
            if (!bottles.hasOwnProperty(flavor)) {
                bottles[flavor] = 0;
            }

            const numberOfNewBottles = Math.floor(juices[flavor] / 1000);
            bottles[flavor] += numberOfNewBottles;
            juices[flavor] -= (numberOfNewBottles * 1000);
        }
    }
}
juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);