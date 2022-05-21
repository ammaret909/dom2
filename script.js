function addStudentToTable(index,student){
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    let div = document.createElement('div')
    let image = document.createElement('img')
    cell.setAttribute('scope','row')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.name
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.appendChild(div)
    div.appendChild(image)
    image.setAttribute('src',student.imageLink)
    image.classList.add('img-thumbnail')
    image.style.width = '150px'
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)
    tableBody.appendChild(row)
}
function addStudentList(studentlist){
    let counter = 1
    for(student of studentlist){
        addStudentToTable(counter++ ,student)
    }
}

function onLoad(){
    fetch('asset/students2.json').then(response => {
        return response.json()
    })
        .then(data =>{
            let students = data
            addStudentList(data)
        })
}
