function sumFirstLast(arr) {
    arr = arr.map(Number);
    let first = arr[0];
    let last = arr[arr.length - 1];
    let sum = first + last;
    return sum;
}
sumFirstLast(['20', '30', '40']);