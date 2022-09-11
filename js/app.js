
const { number, string } = require('yargs')
const yargs = require('yargs')

const students = require('./grade')

//add student
yargs.command({
    command: 'add',
    describe: 'add student',
    builder: {
        id: {
            describe: 'This is the student ID',
            type: 'number',
            demandOption: true
        },
        name: {
            describe: 'This is student name',
            type: 'string',
            demandOption: true
        },
        degree: {
            describe: 'This is array of student degrees',
            type: 'array',
            demandOption: true
        },
        comment: {
            describe: 'This is comment on student degree',
            type: 'string',
            demandOption: false
        }
    },
    handler: () => {
        students.addStudent(yargs.argv.id, yargs.argv.name, yargs.argv.degree, yargs.argv.comment)
        // console.log(yargs.argv.degree)
    }

})

//delete student
yargs.command({
    command: 'delete',
    describe: 'delete student',
    builder: {
        id: {
            describe: 'This is the student ID',
            type: 'number',
            demandOption: true
        }
    },
    handler: () => {
        students.removeStudent(yargs.argv.id)
    }

})

//read student
yargs.command({
    command: 'read',
    describe: 'read student info',
    builder: {
        id: {
            describe: 'This is the student ID',
            type: 'number',
            demandOption: true
        }
    },
    handler: () => {
        students.readData(yargs.argv.id)
    }

})

//list students
yargs.command({
    command: 'list',
    describe: 'list student names and totals',
    handler: () => {
        students.listData()
    }

})

//update student info
yargs.command({
    command: 'update',
    describe: 'update student name',
    builder: {
        id: {
            describe: 'This is the student ID',
            type: 'number',
            demandOption: true
        },
        name: {
            describe: 'This is student name',
            type: 'string',
            demandOption: true
        }
    },
    handler: () => {
        students.updateData(yargs.argv.id, yargs.argv.name)
    }
})
yargs.parse()