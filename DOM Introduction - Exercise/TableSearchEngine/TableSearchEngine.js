function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searched = document.getElementById('searchField');
      let data = Array.from(document.querySelectorAll('tbody tr'));

      for (let el of data) {
         el.className = '';

         if (el.innerHTML.includes(searched.value)) {
            el.className = 'select';
         }
      }
      searched.value = '';
   }
}