
function updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hour = ('0' + now.getHours()).slice(-2);
    const minute = ('0' + now.getMinutes()).slice(-2);
    currentTime.value = `${year}-${month}-${day} ${hour}:${minute}`;
    currentDateString = `${year}-${month}-${day}`;
}

// automatically calibrate time
updateDateTime();
startDateString = currentDateString;
endDateString = currentDateString;
boundaryDate.forEach(input =>{
    input.value = currentDateString;
})

setInterval(updateDateTime, 60000);
