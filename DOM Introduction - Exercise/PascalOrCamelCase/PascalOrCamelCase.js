function solve() {
  let firstParam = document.getElementById('text').value;
  let secParam = document.getElementById('naming-convention').value;

  if (secParam == 'Camel Case') {
    firstParam = firstParam.split(' ');
    let firstWord = firstParam.shift();
    firstWord = firstWord.toLowerCase();

    for (let i = 0; i < firstParam.length; i++) {
      let currWord = firstParam[i];
      currWord = currWord.split('');
      let firstLetter = currWord.shift().toUpperCase();

      for (let j = 0; j < currWord.length; j++) {
        currWord[j] = currWord[j].toLowerCase();
      }
      currWord.unshift(firstLetter);
      firstParam[i] = currWord.join('');
    }
    firstParam.unshift(firstWord);
    console.log(document.getElementById('result').textContent = firstParam.join(''));

  } else if (secParam == 'Pascal Case') {
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

    console.log(document.getElementById('result').textContent = firstParam.join(''));

  } else {
    console.log(document.getElementById('result').textContent = 'Error!');
  }
}