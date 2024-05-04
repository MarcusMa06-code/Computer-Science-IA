// Initializing the content of page
function initialization(){
    updateDateTime();
    form.style.display = 'block';
    document.querySelector("#time-span").style.display='none';
    document.querySelector("#download-button").style.display='none';
    hideTableData(currentDateString,currentDateString);
    analysis.style.display = 'none';
    document.querySelector('#reference-day-container').style.display = 'none';
}
initialization();

// Navigation through navigation bar

historyNav.addEventListener('click', function() {
    form.style.display = 'none';
    document.querySelector("#time-span").style.display='block';
    document.querySelector("#download-button").style.display='none';
    document.querySelector('#one-click-register-all').style.display = 'none';
    table.style.display = '';
    analysis.style.display = 'none';
    hideTableData(startDateString,endDateString);
    document.querySelector('#reference-day-container').style.display = 'none';
})

todayNav.addEventListener('click', function() {
    initialization();
    document.querySelector('#one-click-register-all').style.display = '';
    table.style.display = '';
})