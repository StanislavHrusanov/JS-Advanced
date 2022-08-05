function timeToWalk(distanceInSteps, footprintInMeters, speedInKmH) {
    let distanceInMeters = distanceInSteps * footprintInMeters;
    let breaksInMinutes = Math.floor(distanceInMeters / 500);
    let speedInMetersInSec = speedInKmH * 1000 / 3600;
    let totalTimeInSec = distanceInMeters / speedInMetersInSec;
    totalTimeInSec += breaksInMinutes * 60;
    let hours = Math.floor(totalTimeInSec / 3600);
    let hoursReminder = totalTimeInSec - (hours * 3600);
    let min = Math.floor(hoursReminder / 60);
    let sec = Math.round(hoursReminder - (min * 60));

    console.log(`${String(hours).padStart(2, 0)}:${String(min).padStart(2, 0)}:${String(sec).padStart(2, 0)}`);
}
timeToWalk(2564, 0.70, 5.5);