function attachEventsListeners() {
    const inputField = document.getElementById('inputDistance');
    const fromOptions = document.getElementById('inputUnits');
    const convertBtn = document.querySelector('input[type="button"]');
    const outputField = document.getElementById('outputDistance');
    const toOptions = document.getElementById('outputUnits');

    convertBtn.addEventListener('click', convertTo);

    distancesInMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function convertDistancesInMeters() {
        const chosenOption = fromOptions.options[fromOptions.selectedIndex].value;
        let input = Number(inputField.value) * distancesInMeters[chosenOption];
        return input;
    }

    function convertTo() {
        const chosenOptionTo = toOptions.options[toOptions.selectedIndex].value;
        let distanceToConvert = convertDistancesInMeters();
        let output = distanceToConvert / distancesInMeters[chosenOptionTo];
        outputField.value = output;
    }
}