function filterEmployees(data, criteria) {
  let [key, value] = criteria.split('-');
  let counter = 0;
  JSON.parse(data).forEach(person => selectByCriteria.call(person));

  function selectByCriteria() {

    if (this[key] === value || criteria === 'all') {

      return console.log(`${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`);

    }
  }
}
filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  'all');