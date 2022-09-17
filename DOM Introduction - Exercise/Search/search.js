function search() {
   let listOfTowns = document.querySelectorAll('ul#towns li');
   let towns = Array.from(listOfTowns);
   let searchedText = document.getElementById('searchText').value;
   let matches = 0;

   for (let town of towns) {
      let townName = town.textContent;
      if (townName.includes(searchedText)) {
         town.style['text-decoration'] = 'underline';
         town.style['font-weight'] = 'bold';
         matches++;
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`;
}
