import studentsInfo from '../student_info.json' with {type: 'json'};

// auto complete the form
commonNameInput.addEventListener('change', function() {
    const grade = document.getElementById('grade').value;
    let found = false;

    for (let i = 0; i < studentsInfo.length; i++) {
        let studentInfo = studentsInfo[i];
        // fuzzy search
        if (studentInfo.grade === grade && studentInfo['common-name'].toLowerCase().includes(commonNameInput.value.toLowerCase())) {
            document.getElementById('studentID').value = studentInfo['student-id'];
            tempStudent = studentInfo;
            return;
        }
    }

    alert(`No student ${commonNameInput.value} found.`);
    commonNameInput.value = '';
    commonNameInput.placeholder = 'Try again';

});


//one click and register all
oneClickButton.addEventListener('click',function(){
    const grade = document.getElementById('grade').value;
    const rows = document.querySelectorAll("#registration-table tr"); //used to comparing the rows already exist

    for (let i=0;i<studentsInfo.length;i++){
        let studentInfo = studentsInfo[i];
        if(studentInfo.grade === grade){
            let add = true;
            rows.forEach(row =>{
                const dateText = row.cells[5].textContent.split(' ')[0];
                if (dateText === currentDateString && row.cells[0].textContent === studentInfo['common-name'] && row.cells[3].textContent === studentInfo.grade){
                    add = false;
                }
            })
            if (add){
                const student = table.insertRow(-1);
                student.innerHTML = `
                    <td id="status-flag">${studentInfo['common-name']}</td>
                    <td>${studentInfo['student-id']}</td>
                    <td>${grade}</td>
                    <td>${studentInfo['register-class']}</td>
                    <td id="status-flag">Present</td>
                    <td>${currentDateString}</td>
                `;
            }
        }
    }
})