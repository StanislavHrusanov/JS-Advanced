function carFactory(obj) {
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };
    let hatchback = { type: 'hatchback', color: undefined };
    let coupe = { type: 'coupe', color: undefined };

    let result = {
        model: obj.model
    };

    if (obj.power <= 90) {
        result.engine = smallEngine;
    } else if (obj.power <= 120) {
        result.engine = normalEngine;
    } else if (obj.power <= 200) {
        result.engine = monsterEngine;
    }

    if (obj.carriage == 'hatchback') {
        result.carriage = hatchback;
    } else if (obj.carriage == 'coupe') {
        result.carriage = coupe;
    }

    result.carriage.color = obj.color;

    let wheelsize = defineWheelSize(obj.wheelsize);

    result.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

    return result;

    function defineWheelSize(size) {
        if (size % 2 == 0) {
            return size - 1;
        }
        return size;
    }
}
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});