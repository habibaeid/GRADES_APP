const { notStrictEqual } = require('assert')
const fs = require('fs')

//id --> yargs.argv.id
//name --> yargs.argv.name
//degree --> yargs.argv.degree
//comment --> yargs.argv.comment

//FUN2
//LoadStudents
const loadData = () => {
    try {
        const data = fs.readFileSync('grades.json').toString()
        //convert json to obj --> parse
        return JSON.parse(data)

    }
    catch (e) {
        return []
    }
}

//FUNCTION 1
//AddStudent
const addStudent = (id, name, degree, comment) => {
    const students = loadData()
    //console.log(students)   //[] --> push
    const duplicates = students.find((el) => {
        return el.id === id
    })

    if (!duplicates) {
        let sum = 0
        for (el in degree) {
            sum+= degree[el]
        }

        students.push({
            id,
            name,
            degree,
            comment,
            total:sum
            
        })

        // console.log(students)   //[ { id: 30, name: 'habiba', degree: [ 2, 3, 4 ], comment: 'v good' } ]
        saveData(students)
        console.log('Student successfully added')
        
    } else {
        console.log("ERROR  Student with ID "+ id +" already exists")
    }
    
}

//FUN3
//SaveData
const saveData = (data) => {
    //console.log(data)
    //obj--> json
    const dataJSON = JSON.stringify(data)
    //write in json file
    fs.writeFileSync('grades.json', dataJSON)
}

//////////////////////////////////////////////////////////////////////////////////////
//delete student
const removeStudent = (id) => { //--id=60
    const students = loadData() //array of json existing in grades.json

    const student = students.find((el) => {
        return el.id === id
    })

    // console.log(student)    //{ id: 60, name: 'razan', degree: [ 65, 70, 95 ], comment: 'excellent' }
    if (student) {     //note has value
        const index = students.indexOf(student)
        //console.log(index)  //0
        students.splice(index, 1)   //delete
        saveData(students)  //new array
        console.log('Note deleted successfully')
    } else {
        console.log('student not found')
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
//read Students list
const readData = (id) => {
    const students = loadData()
    const student = students.find((el) => {
        return el.id === id
    })
    if (student) {
        console.log('Student name is ' + student.name)
        console.log('Student total is '+ student.total)
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
//list students
const listData = () => {
    const students = loadData()
    for (el of students) {
        console.log('Student Name: ' + el.name + ' , total is ' + el.total)
    }
}
////////////////////////////////////////////////////////////////////////////////////
//update student info
const updateData = (id, name) => {
    const students = loadData()     //array of json
    const student = students.find((el) => {
        return el.id === id
    })
    if (student) {
        student.name = name 
        saveData(students)
        console.log('Student updated successfully, new name is ' + name)
    } else {
        console.log('Student not found')
    }
    
    
    
}


module.exports = {
    addStudent,
    removeStudent,
    readData,
    listData,
    updateData
}