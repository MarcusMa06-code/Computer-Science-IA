// Table related codes

function addEntryToTable() {
    const rows = document.querySelectorAll("#registration-table tr"); //
    let existed = false;
    rows.forEach(row =>{
        const dateText = row.cells[5].textContent;
        if (dateText == currentDateString && row.cells[1].textContent == tempStudent['student-id']){
            existed = true;
        }
    })

    if (existed){
        alert("This entry conflicts with an existing one");
        return;
    }

    const condition = document.getElementById('conditions').value;
    const row = table.insertRow(-1);
    row.innerHTML = `
        <td id="status-flag">${tempStudent['common-name']}</td>
        <td>${tempStudent['student-id']}</td>
        <td>${tempStudent.grade}</td>
        <td>${tempStudent['register-class']}</td>
        <td id="status-flag">${condition}</td>
        <td>${currentDateString}</td>
    `;

    if (condition === 'Late'){
        let extraAttentions = row.querySelectorAll('#status-flag');
        extraAttentions.forEach(extraAttention =>{
            extraAttention.style.color = 'white';
            extraAttention.style['background-color'] = 'red';
            extraAttention.style['font-wright'] = 'bold';
        })
    }

    if (condition === 'Medical'){
        let extraAttentions = row.querySelectorAll('#status-flag');
        extraAttentions.forEach(extraAttention =>{
            extraAttention.style.color = 'white';
            extraAttention.style['background-color'] = 'green';
            extraAttention.style['font-wright'] = 'bold';
        })
    }

    if (condition === 'Left-Early'){
        let extraAttentions = row.querySelectorAll('#status-flag');
        extraAttentions.forEach(extraAttention =>{
            extraAttention.style['background-color'] = 'yellow';
            extraAttention.style['font-wright'] = 'bold';
        })
    }

    if (condition === 'Authorised'){
        let extraAttentions = row.querySelectorAll('#status-flag');
        extraAttentions.forEach(extraAttention =>{
            extraAttention.style['background-color'] = '#7FFFD4';
            extraAttention.style['font-wright'] = 'bold';
        })
    }

    if (condition === 'Absent'){
        let extraAttentions = row.querySelectorAll('#status-flag');
        extraAttentions.forEach(extraAttention =>{
            extraAttention.style.color = 'white';
            extraAttention.style['background-color'] = '#FF8C00';
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
        const dateText = row.cells[5].textContent
        if((dateText >= startDate && dateText <= endDate)){
            row.style.display = '';
        } else row.style.display = 'none';
    });
}

// Add data into table
form.addEventListener('submit', () => { addEntryToTable(); });

loadTableData();
