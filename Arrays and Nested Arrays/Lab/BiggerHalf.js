function biggerHalf(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let middleIndex = arr.length / 2;

    if (arr.length % 2 != 0) {
        middleIndex = (arr.length - 1) / 2;
    }

    let secondHalf = sortedArr.slice(middleIndex);
    return secondHalf;
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);