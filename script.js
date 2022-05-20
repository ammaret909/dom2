var student = {};
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'

// document.getElementById('output').innerText = student;

// function addStudentData(student){
//     const output = document.getElementById('output')
//     let row = document.createElement('div')
//     row.classList.add('row')
//     let columnName = document.createElement('div')
//     columnName.classList.add('col-1')
//     columnName.classList.add('offset-1')
//     columnName.innerHTML = 'ชื่อ'
//     let columnValue = document.createElement('div')
//     // columnValue = document.createElement('row')
//     columnName.classList.add('col')
//     columnValue.innerText = student.name;
//     row.appendChild(columnName)
//     row.appendChild(columnValue)
//     output.appendChild(row)
// }

// window.addEventListener("load",function(){
//     addStudentData(student)
// })

function addStudentToTable(index,student){
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope','row')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.name 
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.username
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)
    tableBody.appendChild(row)
}

function addStudentList(studentList){
    let counter = 1
    for (student of studentList){
        addStudentToTable(counter++,student)
    }
}

// window.addEventListener("load",function(){
//     addStudentToTable(student)
// })