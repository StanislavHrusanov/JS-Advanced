function solve() {
  let text = document.getElementById('input');
  let sentences = text.value.split('.').filter(el => el != '');
  let counter = 0;
  let paragraph = '';
  let output = [];
  for (let i = 0; i < sentences.length; i++) {
    counter++;
    paragraph += sentences[i] + '.';

    if (counter == 3 || i == sentences.length - 1) {
      output.push(`<p>${paragraph}</p>`);
      counter = 0;
      paragraph = '';
    }
  }
  document.getElementById('output').innerHTML = output.join('\n');
}