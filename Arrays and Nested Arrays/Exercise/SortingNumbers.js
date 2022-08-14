function sortingNumbers(arr) {
    arr.sort((a, b) => a - b);
    let output = [];

    while (arr.length > 0) {
        let smallest = arr.shift();
        output.push(smallest);
        if (arr.length <= 0) {
            break;
        }
        let biggest = arr.pop();
        output.push(biggest);
    }

    return output;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);