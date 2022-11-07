function cars(arr) {
    let obj = {};
    for (let str of arr) {
        let input = str.split(' ');

        if (input[0] == 'create' && input.length == 2) {
            create(input[1]);
        } else if (input[0] == 'create' && input[2] == 'inherit') {
            createAndInherits(input[1], input[3]);
        } else if (input[0] == 'set') {
            set(input[1], input[2], input[3]);
        } else if (input[0] == 'print') {
            print(input[1]);
        }
    }

    function create(name) {
        obj[name] = {};
    }

    function createAndInherits(name, name1) {
        obj[name] = Object.create(obj[name1]);
    }

    function set(name, key, value) {
        obj[name][key] = value;
    }

    function print(name) {
        let output = [];

        for (let key in obj[name]) {
            output.push(`${key}:${obj[name][key]}`);
        }
        console.log(output.join(','));
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);