// Date picker and validation

boundaryDate.forEach(input => {
    input.addEventListener('change', function(){
        startDateString = document.querySelector('#starting-date-container input').value;
        endDateString = document.querySelector('#ending-date-container input').value;
        if (startDateString > endDateString) {
            alert('Starting Date has to be prior to ending date!');

            endDateString = document.querySelector('#ending-date-container input').value = startDateString;
        }
        hideTableData(startDateString,endDateString);
        analysisAndExport.click();
    });
});
