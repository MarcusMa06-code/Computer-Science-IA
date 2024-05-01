// Initializing the content of page
function initialization(){
    updateDateTime();
    document.querySelector('#registration-form').style.display = 'block';
    document.querySelector("#time-span").style.display='none';
    document.querySelector("#download-button").style.display='none';
    hideTableData(currentDateString,currentDateString);
}
initialization();

// Navigation through navigation bar

historyNav.addEventListener('click', function() {
    document.querySelector('#registration-form').style.display = 'none';
    document.querySelector("#time-span").style.display='block';
    document.querySelector("#download-button").style.display='none';
    hideTableData(startDateString,endDateString);
});

todayNav.addEventListener('click', function() {
    initialization();
});

exportAll.addEventListener('click', function() {
    document.querySelector('#registration-form').style.display = 'none';
    document.querySelector("#time-span").style.display='block';
    document.querySelector("#download-button").style.display='block';
    hideTableData(startDateString,endDateString);
});
