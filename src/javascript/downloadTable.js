// download function
function downloadXLS(){
    var exportedTable = document.createElement('table');
    var rows = table.querySelectorAll("tbody tr");
    rows.forEach(row =>{
        if (row.style.display === ''){
            let temp = row.cloneNode(true);
            exportedTable.appendChild(temp);
        }
    })
    
    exportedTable.style.fontFamily = 'Roboto, arial';
    exportedTable.style.fontSize = '12px';
    exportedTable.style.borderCollapse = 'collapse';
    exportedTable.style.marginTop = '20px';
    exportedTable.querySelectorAll('td, th').forEach(cell => {
        cell.style.border = '1px solid #dddddd';
        cell.style.textAlign = 'left';
        cell.style.padding = '8px';
    });
    
    let a = document.createElement('a');
    a.href = `data:application/vnd.ms-excel, ${encodeURIComponent(exportedTable.outerHTML)}`;
    a.download = startDateString + ' to ' + endDateString + '.xls';
    a.click();


    //second
    exportedTable = document.createElement('table');
    rows = analysis.querySelectorAll("tbody tr");
    exportedTable.appendChild(analysis.querySelector('thead tr'));

    rows.forEach(row =>{
        if (row.style.display === ''){
            let temp = row.cloneNode(true);
            exportedTable.appendChild(temp);
        }
    })

    exportedTable.style.fontFamily = 'Roboto, arial';
    exportedTable.style.fontSize = '12px';
    exportedTable.style.borderCollapse = 'collapse';
    exportedTable.style.marginTop = '20px';
    exportedTable.querySelectorAll('td, th').forEach(cell => {
        cell.style.border = '1px solid #dddddd';
        cell.style.textAlign = 'left';
        cell.style.padding = '8px';
    });
    
    a = document.createElement('a');
    a.href = `data:application/vnd.ms-excel, ${encodeURIComponent(exportedTable.outerHTML)}`
    a.download = 'analysis\:' + startDateString + ' to ' + endDateString + '.xls'
    a.click()
}
document.getElementById('download-button').addEventListener('click', downloadXLS);