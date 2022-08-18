const express = require('express');
const intakeRouter = express.Router()
const {v4: uuidv4} = require('uuid');



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



intakeRouter.get('/', (req, res) =>{
    res.send(items);
});

intakeRouter.post('/', (req, res) => {
    const newIntake = req.body;
    newIntake.id = uuidv4();
    items.push(newIntake);
    
    res.send(`Successfully added ${newIntake.name} to the database.`)
});


module.exports = intakeRouter;