function argumentInfo() {
    let obj = {};

    [...arguments].forEach(argument => {
        let type = typeof argument;
        if (!obj.hasOwnProperty(type)) {
            obj[type] = 0;
        }
        obj[type]++;

        console.log(`${type}: ${argument}`);
    });
    let sortedTypes = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

    sortedTypes.forEach(key => {

        console.log(`${key} = ${obj[key]}`);
    });
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });