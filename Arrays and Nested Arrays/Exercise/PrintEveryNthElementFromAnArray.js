function printEveryNthElementFromAnArray(arr, step) {
    let output = [];

    for (let i = 0; i < arr.length; i += step) {
        output.push(arr[i]);
    }

    return output;
}
printEveryNthElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2);