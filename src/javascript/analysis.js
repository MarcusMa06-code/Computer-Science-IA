import { studentsInfo } from './jsonAccess.js';

analysisAndExport.addEventListener('click', function() {
    form.style.display = 'none';
    document.querySelector("#time-span").style.display='block';
    document.querySelector("#download-button").style.display='block';
    document.querySelector('#one-click-register-all').style.display = 'none';
    table.style.display = 'none';
    analysis.style.display = '';
    document.querySelector('#reference-day-container').style.display = '';
    generateAnalysis();
})

function generateAnalysis(){
    var attendDay = 0;
    var tempDate = '';
    var registerRawData = [];
    for (let i=1000;i<=4000;i++){
        //because students id starts from 1000
        registerRawData[i]= {
            'Present' : 0,
            'Absent' : 0,
            'Medical' : 0,
            'Authorised' : 0,
            'Late' : 0,
            'Left-Early' : 0
        };
    }
    const tbody = analysis.querySelector('tbody');
    tbody.innerHTML='';
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row =>{
        const dateText = row.cells[5].textContent;
        if(dateText >= startDateString && dateText <= endDateString){
            if(tempDate != dateText){
                tempDate = dateText;
                attendDay++;
            }
            registerRawData[Number(row.cells[1].textContent)][row.cells[4].textContent]++;
        }
    })
    document.querySelector('#reference-day').textContent = attendDay;
    for (let i = 0; i<studentsInfo.length;i++){
        let studentInfo = studentsInfo[i];
        const student = tbody.insertRow();
        student.innerHTML = `
            <td class="px-4 py-2 text-center">${studentInfo['common-name']}</td>
            <td class="px-4 py-2 text-center">${studentInfo['student-id']}</td>
            <td class="px-4 py-2 text-center">${studentInfo['grade']}</td>
            <td class="px-4 py-2 text-center">${registerRawData[studentInfo['student-id']].Present}</td>
            <td class="px-4 py-2 text-center">${registerRawData[studentInfo['student-id']].Absent}</td>
            <td class="px-4 py-2 text-center">${registerRawData[studentInfo['student-id']].Medical}</td>
            <td class="px-4 py-2 text-center">${registerRawData[studentInfo['student-id']].Authorised}</td>
            <td class="px-4 py-2 text-center">${registerRawData[studentInfo['student-id']].Late}</td>
            <td class="px-4 py-2 text-center">${registerRawData[studentInfo['student-id']]['Left-Early']}</td>
            <td class="px-4 py-2 text-center">${registerRawData[studentInfo['student-id']].Present/attendDay*100 + '%'}</td>
        `;
    }
}

export {generateAnalysis}