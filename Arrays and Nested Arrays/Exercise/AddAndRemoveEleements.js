function addAndRemoveElements(commands) {
    let number = 1;
    let output = [];

    for (let command of commands) {

        if (command == 'add') {
            output.push(number);
        } else if (command == 'remove') {
            output.pop();
        }
        number++;
    }

    if (output.length == 0) {
        console.log('Empty');
    } else {
        console.log(output.join('\n'));
    }
}
addAndRemoveElements(['remove',
    'remove',
    'remove']
);