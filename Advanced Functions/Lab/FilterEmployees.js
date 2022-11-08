function filterEmployees(data, criteria) {
    data = JSON.parse(data);

    if (criteria != 'all') {
        const [key, value] = criteria.split('-');
        data = data.filter(e => e[key] == value);
    }

    for (let i = 0; i < data.length; i++) {
        console.log(`${i}. ${data[i].first_name} ${data[i].last_name} - ${data[i].email}`);
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
    'last_name-Johnson');