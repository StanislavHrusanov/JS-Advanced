function townsToJSON(arr) {
    let pattern = /\s*\|\s*/g;
    let properties = arr.shift().split(pattern).filter(el => el != '');
    let firstProperty = properties[0];
    let secondProperty = properties[1];
    let thirdProperty = properties[2];

    let output = [];

    for (let line of arr) {
        line = line.split(pattern).filter(el => el != '');
        let town = line[0];
        let latitude = Number(line[1]).toFixed(2);
        let longitude = Number(line[2]).toFixed(2);
        latitude = parseFloat(latitude);
        longitude = parseFloat(longitude);
        let townInfo = {
            [firstProperty]: town,
            [secondProperty]: latitude,
            [thirdProperty]: longitude
        }
        output.push(townInfo);
    }

    console.log(JSON.stringify(output));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);