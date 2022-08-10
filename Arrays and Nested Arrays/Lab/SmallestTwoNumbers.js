function smallestTwoNumbers(arr) {
    let smallestNum = Number.MAX_SAFE_INTEGER;
    let secondSmallestNum = Number.MAX_SAFE_INTEGER;

    for (let el of arr) {

        if (el < smallestNum) {
            secondSmallestNum = smallestNum;
            smallestNum = el;

        } else if (el >= smallestNum && el < secondSmallestNum) {
            secondSmallestNum = el;
        }
    }
    if (arr.length < 2) {
        console.log(smallestNum);
    } else {
        console.log(smallestNum, secondSmallestNum);
    }
}
smallestTwoNumbers([5]);