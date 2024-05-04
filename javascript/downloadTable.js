// download function
function downloadXLS(){
    const exportedTable = document.createElement('table');
    const rows = table.querySelectorAll("tbody tr");
    rows.forEach(row =>{

        if (row.cells[2].textContent === searchGrade.value || !searchGrade.value){
            console.log('yes')
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
    a = document.createElement('a');
    a.href = `data:application/vnd.ms-excel, ${encodeURIComponent(analysis.outerHTML)}`;
    a.download = 'analysis.xls';
    a.click();
}
document.getElementById('download-button').addEventListener('click', downloadXLS);