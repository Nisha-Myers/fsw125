const express = require("express")
const { v4: uuid } = require("uuid")

const thingRouter = express.Router()




things = [
    {
        "name": "banana",
        "type": "fruit",
        "price": 1.5,
        _id: uuid()
    },
    {
        "name": "apple",
        "type": "fruit",
        "price": 1.5,
        _id: uuid() 
    },
    {
        "name": "orange",
        "type": "fruit",
        "price": 1.75,
        _id: uuid()
    },
    {
        "name": "video game",
        "type": "entertainment",
        "price": 60.00,
        _id: uuid()
    },
    {
        "name": "shampoo",
        "type": "hygiene",
        "price": 5.00,
        _id: uuid()
    },
    {
        "name": "monitor",
        "type": "tech",
        "price": 50.00,
        _id: uuid()
    }
];



// router
thingRouter

.get('/', (req, res) => {
    res.status(200);
    res.send(things);
})

.get('/:thingType', (req, res) => {
    const thingType = req.params.thingType;
    const matches = things.filter((thing) => thing.type === thingType);
    console.log(matches)
    res.status(200);
    res.send(matches);
})

.get('/search/type', (req, res) => {
    const queryType = req.query.type;
    console.log(queryType)
    const someMatches = things.filter((thing) => thing.type === queryType);
    res.status(200);
    res.send(someMatches);
});




module.exports = thingRouter;