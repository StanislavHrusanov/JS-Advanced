function attachEventsListeners() {

    const daysInput = document.getElementById('days');
    const daysConvertBtn = document.getElementById('daysBtn');
    const hoursInput = document.getElementById('hours');
    const hoursConvertBtn = document.getElementById('hoursBtn');
    const minutesInput = document.getElementById('minutes');
    const minutesConvertBtn = document.getElementById('minutesBtn');
    const secondsInput = document.getElementById('seconds');
    const secondsConvertBtn = document.getElementById('secondsBtn');

    daysConvertBtn.addEventListener('click', function convertDays() {
        if (daysInput.value != '') {
            hoursInput.value = Number(daysInput.value) * 24;
            minutesInput.value = Number(daysInput.value) * 1440;
            secondsInput.value = Number(daysInput.value) * 86400;
        }
    });

    hoursConvertBtn.addEventListener('click', function convertHours() {
        if (hoursInput.value != '') {
            daysInput.value = Number(hoursInput.value) / 24;
            minutesInput.value = Number(hoursInput.value) * 60;
            secondsInput.value = Number(hoursInput.value) * 3600;
        }
    });

    minutesConvertBtn.addEventListener('click', function convertMinutes() {
        if (minutesInput.value != '') {
            daysInput.value = Number(minutesInput.value) / 1440;
            hoursInput.value = Number(minutesInput.value) / 60;
            secondsInput.value = Number(minutesInput.value) * 60;
        }
    });

    secondsConvertBtn.addEventListener('click', function convertSeconds() {
        if (secondsInput.value != '') {
            daysInput.value = Number(secondsInput.value) / 86400;
            hoursInput.value = Number(secondsInput.value) / 3600;
            minutesInput.value = Number(secondsInput.value) / 60;
        }
    });
}