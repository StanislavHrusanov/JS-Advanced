function heroicInventory(arr) {
    let result = [];

    for (let line of arr) {
        line = line.split(' / ');
        let name = line[0];
        let level = Number(line[1]);
        let items = line[2];
        items = items ? items.split(', ') : [];
        result.push({
            name,
            level,
            items
        });
    }
    console.log(JSON.stringify(result));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);