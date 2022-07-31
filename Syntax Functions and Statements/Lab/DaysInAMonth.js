function daysInAMonth(month, year) {

    let date = new Date(year, month, 1 - 1);
    console.log(date.getDate());
}
daysInAMonth(2, 2021);