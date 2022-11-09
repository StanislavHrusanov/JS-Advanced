function listProcessor(input) {
    let collection = [];

    for (let el of input) {
        if (el != 'print') {
            let [command, str] = el.split(' ');
            if (command == 'add') {
                add(str);
            } else if (command == 'remove') {
                remove(str);
            }
        } else {
            print();
        }
    }
    function add(str) {
        collection.push(str);
    }

    function remove(str) {
        collection = collection.filter(el => el != str);
    }

    function print() {
        console.log(collection.join(','));
    }
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);