// Element that displays the current time

function updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    // const hour = ('0' + now.getHours()).slice(-2);
    // const minute = ('0' + now.getMinutes()).slice(-2);
    currentDateString = currentTime.value = `${year}-${month}-${day}`;
}

// Automatically calibrate time
updateDateTime();
startDateString = currentDateString;
endDateString = currentDateString;
boundaryDate.forEach(input => {
    input.value = currentDateString;
});

// Update date and time every minute
setInterval(updateDateTime, 60000);
