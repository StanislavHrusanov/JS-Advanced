function roadRadar(speed, area) {

    if (area == 'motorway') {
        printOutput(130);

    } else if (area == 'interstate') {
        printOutput(90);

    } else if (area == 'city') {
        printOutput(50);

    } else if (area == 'residential') {
        printOutput(20);

    }

    function printOutput(speedLimit) {

        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            let difference = speed - speedLimit;
            let status;

            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }
}
roadRadar(120, 'interstate');