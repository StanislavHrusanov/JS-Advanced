function negativePositiveNumbers(arr) {
    let output = [];

    for (let el of arr) {
        el < 0 ? output.unshift(el) : output.push(el);
    }
    console.log(output.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9]);