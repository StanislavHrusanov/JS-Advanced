function stringLength(first, second, third) {
    let totalLength = first.length + second.length + third.length;
    let avgLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(avgLength);
}
stringLength('chocolate', 'ice cream', 'cake');