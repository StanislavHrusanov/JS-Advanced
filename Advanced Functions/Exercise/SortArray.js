function sortArray(arr, type) {

    const types = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }

    return arr.sort(types[type]);
}
