function smallestTwoNumbers(arr) {

    let countOfSmallestNumbers = 2;

    if (arr.length < 2) {
        countOfSmallestNumbers = arr.length;
    }

    let output = [];

    for (let i = 0; i < countOfSmallestNumbers; i++) {
        let smallestNum = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < smallestNum) {
                smallestNum = arr[j];
            }
        }
        let indexOfSmallestNum = arr.indexOf(smallestNum);
        if (indexOfSmallestNum != -1) {
            arr.splice(indexOfSmallestNum, 1);
        }
        output.push(smallestNum);
    }
    console.log(output.join(' '))
}
smallestTwoNumbers([5, 10, 20]);