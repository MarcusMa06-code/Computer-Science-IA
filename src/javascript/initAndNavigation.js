// Initializing the content of page
function initialization(){
    updateDateTime();
    form.style.display = 'block';
    document.querySelector("#time-span").style.display='none';
    document.querySelector("#download-button").style.display='none';
    hideTableData(currentDateString,currentDateString);
}
initialization();

// Navigation through navigation bar

historyNav.addEventListener('click', function() {
    form.style.display = 'none';
    document.querySelector("#time-span").style.display='block';
    document.querySelector("#download-button").style.display='none';
    document.querySelector('#one-click-register-all').style.display = 'none';
    table.style.display = '';
    hideTableData(startDateString,endDateString);
});

todayNav.addEventListener('click', function() {
    initialization();
    document.querySelector('#one-click-register-all').style.display = '';
    table.style.display = '';
});

analysisAndExport.addEventListener('click', function() {
    form.style.display = 'none';
    document.querySelector("#time-span").style.display='block';
    document.querySelector("#download-button").style.display='block';
    document.querySelector('#one-click-register-all').style.display = 'none';
    table.style.display = 'none';
});
