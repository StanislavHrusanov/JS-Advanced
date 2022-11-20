function subSum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    return arr.slice(startIndex, endIndex + 1).reduce((a, b) => Number(a) + Number(b), 0);
}