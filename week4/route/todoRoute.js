const express = require('express')
const { v4: uuidv4 } = require('uuid')
const toDoRouter = express.Router()



let toDos = [
    {
        ToDo: "clean study room",
        descr: "dust & vaccum",
        day: "Monday",
        _id: uuidv4()
    },
    {
        ToDo: "DO HOMEWORK",
        descr: "Finish ALL Homework",
        day: "Tuesday",
        _id: uuidv4()
    },
    {
        ToDo: "make time for family",
        descr: "play games with Brandon",
        day: "Friday",
        _id: uuidv4()
    }
]




toDoRouter

    .get('/', (req, res, next) =>{
        res.send(toDos)
        next()
    })

    .get('/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId
        const singularToDO = toDos.find(toDo => toDo._id === toDoId )

        res.send(singularToDO)
    })

    .post('/', (req, res) => {
        const newToDo = req.body
        newToDo._id = uuidv4()
        toDos.push(newToDo)

        res.send(`This particular resource has been successfully added.`)
    })

    .put('/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId
        const toDoIndex = toDos.findIndex(toDo => toDo._id === toDoId )
        Object.assign(toDos[toDoIndex], req.body)

        res.send('This particular resource has been updated')
    })

    .delete('/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId
        const toDoIndex = toDos.findIndex(toDo => toDo._id === toDoId )
        toDos.splice(toDoIndex, 1)

        res.send('This particular resource has been successfully deleted')
    })




module.exports = toDoRouter