function updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    currentDateString = currentTime.value = `${year}-${month}-${day}`;
}


updateDateTime();
startDateString = endDateString = currentDateString;
boundaryDate.forEach(input => {
    input.value = currentDateString;
})
setInterval(updateDateTime, 60000);