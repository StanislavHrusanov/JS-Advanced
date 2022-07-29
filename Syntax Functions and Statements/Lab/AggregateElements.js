function aggregateElements(arr) {
    let resultOne = 0;
    let resultTwo = 0;
    let resultThree = '';

    for (let el of arr) {
        resultOne += el;
        resultTwo += 1 / el;
        resultThree += el;
    }

    console.log(`${resultOne}\n${resultTwo}\n${resultThree}`);
}
aggregateElements([1, 2, 3]);