function solve() {
  const answers = document.querySelectorAll('p');
  Array.from(answers).forEach(answer => answer.addEventListener('click', onClick));
  const sections = document.querySelectorAll('section');
  const result = document.querySelector('#results h1');
  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let userRightAnswers = 0;
  let questionCounter = 0;

  function onClick(e) {

    if (e.target.textContent == rightAnswers[questionCounter]) {
      userRightAnswers++
    }

    sections[questionCounter].style.display = 'none';
    questionCounter++;

    if (questionCounter > 2) {
      document.querySelector('div#quizzie ul#results').style.display = 'block';

      if (userRightAnswers == 3) {
        result.textContent = "You are recognized as top JavaScript fan!"

      } else {
        result.textContent = `You have ${userRightAnswers} right answers`;
      }

    } else {
      sections[questionCounter].style.display = 'block';
    }
  }
}
