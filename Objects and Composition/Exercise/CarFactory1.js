function carFactory(obj) {

    return {
        model: obj.model,
        engine: selectEngine(obj.power),
        carriage: selectCarriage(obj.carriage, obj.color),
        wheels: selectWheels(obj.wheelsize)
    };

    function selectWheels(size) {
        if (size % 2 == 0) {
            return new Array(4).fill(size - 1);
        }
        return new Array(4).fill(size);
    }

    function selectCarriage(type, color) {
        return {
            type,
            color
        }
    }

    function selectEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else if (power <= 200) {
            return { power: 200, volume: 3500 };
        }
    }
}
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});