function solve() {
    let firstParam = document.getElementById('text').value;
    let secParam = document.getElementById('naming-convention').value;

    if (secParam == 'Camel Case') {
        firstParam = firstParam.split(' ');
        let firstWord = firstParam.shift();
        firstWord = firstWord.toLowerCase();
        firstParam = firstParam.join(' ');

        console.log(document.getElementById('result').textContent = firstWord + transformLetters(firstParam));

    } else if (secParam == 'Pascal Case') {
        console.log(document.getElementById('result').textContent = transformLetters(firstParam));
    } else {
        console.log(document.getElementById('result').textContent = 'Error!');
    }

    function transformLetters(firstParam) {
        firstParam = firstParam.split(' ');

        for (let i = 0; i < firstParam.length; i++) {
            let currWord = firstParam[i];
            currWord = currWord.split('');
            let firstLetter = currWord.shift();
            firstLetter = firstLetter.toUpperCase();

            for (let j = 0; j < currWord.length; j++) {
                currWord[j] = currWord[j].toLowerCase();
            }
            currWord.unshift(firstLetter);
            firstParam[i] = currWord.join('');
        }
        return firstParam.join('');
    }
}