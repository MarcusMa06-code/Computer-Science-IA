import studentsInfo from '../student_info.json' with {type: 'json'};

// auto complete the form
commonNameInput.addEventListener('change', function() {
    const grade = document.getElementById('grade').value;
    let found = false;

    for (let i = 0; i < studentsInfo.length; i++) {
        let studentInfo = studentsInfo[i];
        if (studentInfo.grade === grade && studentInfo['common-name'].toLowerCase == commonNameInput.value.toLowerCase()) {
            document.getElementById('studentID').value = studentInfo['student-id'];
            document.getElementById('common-name').value = studentInfo['common-name'];
            tempStudent = studentInfo;
            return;
        }
    }

    alert(`No student ${commonNameInput.value} found.`);
    commonNameInput.value = '';
    commonNameInput.placeholder = 'Try again';
});


//one click and register all

oneClickButton.addEventListener('click', function() {
    const grade = document.getElementById('grade').value;
    const tbody = table.querySelector('tbody');
    const rows = tbody.querySelectorAll("tr");

    for (let i = 0; i < studentsInfo.length; i++) {
        let studentInfo = studentsInfo[i];
        if (studentInfo.grade === grade) {
            let add = true;
            rows.forEach(row => {
                const dateText = row.cells[5].textContent;
                if (dateText === currentDateString && row.cells[1].textContent === studentInfo['student-id']) {
                    add = false;
                }
            })
            if (add) {
                const student = tbody.insertRow();
                student.innerHTML = `
                    <td class="px-4 py-2 text-center" id="name">${studentInfo['common-name']}</td>
                    <td class="px-4 py-2 text-center">${studentInfo['student-id']}</td>
                    <td class="px-4 py-2 text-center">${grade}</td>
                    <td class="px-4 py-2 text-center">${studentInfo['register-class']}</td>
                    <td class="px-4 py-2 text-center" id="condition">Present</td>
                    <td class="px-4 py-2 text-center">${currentDateString}</td>
                `;
                saveTableData();
            }
        }
    }
    addHoverInput();
    location.reload();
});
