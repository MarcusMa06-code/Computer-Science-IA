import studentsInfo from '../student_info.json' with {type: 'json'};

// auto complete the form
commonNameInput.addEventListener('change',function(){

    const grade = document.getElementById('grade').value;
    const regClass = document.getElementById('register-class').value;

    for(let i=0;i<studentsInfo.length;i++){
        let studentInfo = studentsInfo[i];
        if(studentInfo.grade === grade && studentInfo['common-name'] == commonNameInput.value){
            document.getElementById('fname').value = studentInfo.fname;
            document.getElementById('lname').value = studentInfo.lname;
            document.getElementById('register-class').value = studentInfo['register-class'];
            return;
        }
    }
    alert(`No student ${commonNameInput.value} found.`)
    commonNameInput.value = '';
    commonNameInput.placeholder = 'Try again';
})