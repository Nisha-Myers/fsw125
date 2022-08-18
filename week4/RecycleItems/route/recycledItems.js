const express = require('express');
const {v4: uuidv4} = require('uuid');
const intakeRouter = express.Router()




let items = [

    {
        name: "bottle",
        desc:"Used water bottle",
        recycle: true,
        quantity: 55,
        pricePerUnit: 0.12,
        _id: uuidv4()
    },
    {
        name: "can",
        desc:"Used tuna can ",
        recycle: true,
        quantity: 78,
        pricePerUnit: 0.15,
        _id: uuidv4()
    },
    {
        name: "soda",
        desc:"Used soda can",
        recycle: true,
        quantity: 102,
        pricePerUnit: 0.44,
        _id: uuidv4()
    }
]



itemRouter

    .get('/',(req, res) => {
        res.send(items)
    })

    .get('/:itemId', (req, res) => {
        const itemId = req.params.itemId
        const singularItem = items.find(item => item._id === itemId)

        res.send(singularItem)
    })

    .post('/', (req, res) => {
        const newItem = req.body
        newItem._id = uuidv4()
        items.push(newItem)

        console.log(items)
        res.send(`${newItem.name} has been successfully added!`)
    })

    .delete('/:itemId', (req, res) => {
        const itemId = req.params.itemId
        const itemIndex = items.findIndex(item => item._id === itemId)
        items.splice(itemIndex, 1)

        res.send('This particular resource has been successfully deleted!')
    })

    .put('/:itemId', (req, res) => {
        const itemId = req.params.itemId
        const itemIndex = items.findIndex(item => item._id === itemId)
        Object.assign(items[itemIndex], req.body)

        res.send('This particular resource has been updated!')
    })





module.exports = itemRouter