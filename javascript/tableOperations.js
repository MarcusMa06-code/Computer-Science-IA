// Table related codes

function addEntryToTable() {
    const commonName = document.getElementById('common-name').value;
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const grade = document.getElementById('grade').value;
    const regClass = document.getElementById('register-class').value;
    const registerTime = currentTime.value;

    var status = 'Registered';
    if (registerTime.slice(-5,-3) === '07'){
        if (registerTime.slice(-2) > '30') status = 'Late';
    } else if (registerTime.slice(-5,-3) > '07') status = 'Late';

    const row = table.insertRow(-1);
    row.innerHTML = `
        <td id="status-flag">${commonName}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${grade}</td>
        <td>${regClass}</td>
        <td id="status-flag">${status}</td>
        <td>${registerTime}</td>
    `;

    if (status === 'Late'){
        let extraAttentions = row.querySelectorAll('#status-flag');
        extraAttentions.forEach(extraAttention =>{
            extraAttention.style.color = 'white';
            extraAttention.style['background-color'] = 'red';
            extraAttention.style['font-wright'] = 'bold';
        })
    }

    saveTableData();
}

function saveTableData() {
    localStorage.setItem('tableData', table.innerHTML);
}

function loadTableData() {
    const storedTableData = localStorage.getItem('tableData');
    if (storedTableData) {
        table.innerHTML = storedTableData;
    }
}

function hideTableData(startDate,endDate){
    const rows = document.querySelectorAll("#registration-table tr:not(:first-child)");
    rows.forEach(row => {
        const dateText = row.cells[6].textContent.split(' ')[0];
        if((dateText >= startDate && dateText <= endDate)){
            row.style.display = '';
        } else row.style.display = 'none';
    });
}

// Add data into table
form.addEventListener('submit', () => { addEntryToTable(); });

loadTableData();
