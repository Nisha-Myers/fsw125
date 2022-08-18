const express = require('express')
const morgan = require('morgan')

const app = express()
const PORT = 3000

const toDoRouter = require('./route/todoRouter')



app.use(express.json())
app.use(morgan('dev'))
app.use('/toDos', toDoRouter)



app.listen(PORT, () => {
    console.log(`This particular app was started on ${PORT}`)
})