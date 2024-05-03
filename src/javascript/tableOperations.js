// Table related codes
function addEntryToTable() {
    const rows = document.querySelectorAll("#registration-table tbody tr");
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

    const condition = document.getElementById('condition-options').value;
    const row = table.querySelector('tbody').insertRow();
    row.innerHTML = `
        <td class="px-4 py-2 text-center" id="name">${tempStudent['common-name']}</td>
        <td class="px-4 py-2 text-center">${tempStudent['student-id']}</td>
        <td class="px-4 py-2 text-center">${tempStudent.grade}</td>
        <td class="px-4 py-2 text-center">${tempStudent['register-class']}</td>
        <td class="px-4 py-2 text-center" id="condition">${condition}</td>
        <td class="px-4 py-2 text-center">${currentDateString}</td>
    `;

    let extraAttentions = row.querySelectorAll('#name, #condition');
    changeColor(condition,row,extraAttentions);
    saveTableData();
}

// Add data into table
form.addEventListener('submit', () => { 
    addEntryToTable(); 
    addHoverInput();
    location.reload();
});

function saveTableData() {
    localStorage.setItem('tableData', table.innerHTML);
}

function loadTableData() {
    const storedTableData = localStorage.getItem('tableData');
    if (storedTableData) table.innerHTML = storedTableData;
}
loadTableData();

function hideTableData(startDate,endDate){
    const rows = table.querySelector('tbody').querySelectorAll("tr");
    rows.forEach(row => {
        const dateText = row.cells[5].textContent;
        if((dateText >= startDate && dateText <= endDate)){
            row.classList.remove('hidden');
        } else row.classList.add('hidden');
    })
}

function addHoverInput(){
    const conditionAttribute = document.querySelectorAll("#condition"); //relocate rows after each new entry
    conditionAttribute.forEach(condition => {
        condition.addEventListener('mouseenter',function(){
            var currentCondition = condition.innerHTML;
            condition.innerHTML=`
                <select id="condition-options">
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Medical">Medical</option>
                    <option value="Authorised">Authorised</option>
                    <option value="Late">Late</option>
                    <option value="Left-Early">Left Early</option>
                </select>
            `;
            condition.querySelector("#condition-options").value = currentCondition;
        })

        condition.addEventListener('mouseleave',function(){
            let conditionName = condition.querySelector("#condition-options").value;
            let row = condition.parentNode;
            let extraAttentions = row.querySelectorAll('#name, #condition');
            condition.innerHTML = conditionName;

            changeColor(conditionName,row,extraAttentions);

            saveTableData();
        })
    })
}
addHoverInput();

//change color
function changeColor(conditionName,row,extraAttentions){
    switch(conditionName){
        case 'Late':
            extraAttentions.forEach(extraAttention =>{
                extraAttention.style.color = 'white';
                extraAttention.style['background-color'] = 'red';
            })
            break;

        case 'Medical':
            extraAttentions.forEach(extraAttention =>{
                extraAttention.style.color = 'white';
                extraAttention.style['background-color'] = 'green';
            })
            break;

        case 'Left-Early':
            extraAttentions.forEach(extraAttention =>{
                extraAttention.style.color = 'black'
                extraAttention.style['background-color'] = 'yellow';
            })
            break;

        case 'Authorised':
            extraAttentions.forEach(extraAttention =>{
                extraAttention.style.color = 'black'
                extraAttention.style['background-color'] = '#7FFFD4';
            })
            break;

        case 'Absent':
            extraAttentions.forEach(extraAttention =>{
                extraAttention.style.color = 'white';
                extraAttention.style['background-color'] = '#FF8C00';
            })
            break;

        default:
            extraAttentions.forEach(extraAttention =>{
                extraAttention.style.color = 'black'
                extraAttention.style = row.childNodes[1].style;
            })
    }
}