function create(words) {
   const content = document.getElementById('content');
   for (let word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      div.appendChild(paragraph);
      paragraph.style.display = 'none';

      div.addEventListener('click', () => {
         paragraph.style.display = 'inline-block';
      });

      content.appendChild(div);
   }

}
