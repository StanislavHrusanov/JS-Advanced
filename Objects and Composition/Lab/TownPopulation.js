function townPopulation(arr) {
    let townPopulationInfo = {};

    for (let line of arr) {
        let [town, population] = line.split(' <-> ');
        population = Number(population);

        if (!townPopulationInfo.hasOwnProperty(town)) {
            townPopulationInfo[town] = 0;
        }
        townPopulationInfo[town] += population;
    }

    for (let [town, population] of Object.entries(townPopulationInfo)) {
        console.log(`${town} : ${population}`);
    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);