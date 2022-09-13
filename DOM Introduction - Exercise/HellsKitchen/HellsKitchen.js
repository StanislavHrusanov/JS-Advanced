function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse((document.querySelector('div#inputs textarea').value));

      let restaurantsInfo = {};

      for (let el of input) {
         el = el.split(' - ');
         let restaurant = el.shift();
         let workersAndSalaries = el.shift().split(', ');

         if (!restaurantsInfo.hasOwnProperty(restaurant)) {
            restaurantsInfo[restaurant] = {};
         }

         workersAndSalaries.forEach(ws => {
            let [name, salary] = ws.split(' ');
            salary = Number(salary);

            if (!restaurantsInfo[restaurant].hasOwnProperty(name)) {
               restaurantsInfo[restaurant][name] = 0;
            }
            restaurantsInfo[restaurant][name] += salary;
         });
      }
      let bestRestaurantInfo = findBestRestaurant(restaurantsInfo);
      let bestRestaurant = `Name: ${bestRestaurantInfo.bestRestaurant} Average Salary: ${bestRestaurantInfo.avgSalary.toFixed(2)} Best Salary: ${bestRestaurantInfo.bestSalary.toFixed(2)}`;
      let bestRestaurantsWorkers = sortWorkers(Object.entries(restaurantsInfo[bestRestaurantInfo.bestRestaurant]));

      document.querySelector('div#bestRestaurant p').textContent = bestRestaurant;
      document.querySelector('div#workers p').textContent = bestRestaurantsWorkers;

      function sortWorkers(matrix) {
         matrix.sort((a, b) => b[1] - a[1]);
         let result = [];
         matrix.forEach(arr => result.push(`Name: ${arr[0]} With Salary: ${arr[1]}`));
         result = result.join(' ');
         return result;
      }

      function findBestRestaurant(object) {
         let restaurants = Object.keys(object);
         let bestRestaurant = '';
         let avgSalary = 0;
         let bestSalary = 0;

         for (let restaurant of restaurants) {
            let sum = 0;
            let numberOfWorkers = Object.keys(object[restaurant]).length;

            for (let salary of Object.values(object[restaurant])) {
               sum += salary;
            }
            let currAvgSalary = sum / numberOfWorkers;

            if (currAvgSalary > avgSalary) {
               bestRestaurant = restaurant;
               avgSalary = currAvgSalary;
            }
         }

         for (let currSalary of Object.values(object[bestRestaurant])) {

            if (currSalary > bestSalary) {
               bestSalary = currSalary;
            }
         }
         let bestRestaurantInfo = {
            bestRestaurant,
            avgSalary,
            bestSalary
         };
         return bestRestaurantInfo;
      }
   }
}