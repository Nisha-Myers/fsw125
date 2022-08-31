const express = require('express'); 
const { v4: uuidv4 } = require('uuid');

const personRoute = express.Router(); 




const people = 

    [

        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "_id": uuidv4()
        },
        {
            "name": "C-3PO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
            "skin_color": "gold",
            "eye_color": "yellow",
            "birth_year": "112BBY",
            "gender": "n/a",
            "_id" : uuidv4()
        },
        {
            "name": "R2-D2",
            "height": "96",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, blue",
            "eye_color": "red",
            "birth_year": "33BBY",
            "gender": "n/a",
            "_id" : uuidv4()
        },
        {
            "name": "Darth Vader",
            "height": "202",
            "mass": "136",
            "hair_color": "none",
            "skin_color": "white",
            "eye_color": "yellow",
            "birth_year": "41.9BBY",
            "gender": "male",
            "_id" : uuidv4()
        },
        {
            "name": "Leia Organa",
            "height": "150",
            "mass": "49",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "19BBY",
            "gender": "female",
            "_id" : uuidv4()
        },
        {
            "name": "Owen Lars",
            "height": "178",
            "mass": "120",
            "hair_color": "brown, grey",
            "skin_color": "light",
            "eye_color": "blue",
            "birth_year": "52BBY",
            "gender": "male",
            "_id" : uuidv4()
        },
        {
            "name": "Beru Whitesun lars",
            "height": "165",
            "mass": "75",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "blue",
            "birth_year": "47BBY",
            "gender": "female",
            "_id" : uuidv4()
        },
        {
            "name": "R5-D4",
            "height": "97",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, red",
            "eye_color": "red",
            "birth_year": "unknown",
            "gender": "n/a",
            "_id" : uuidv4()
        },
        {
            "name": "Biggs Darklighter",
            "height": "183",
            "mass": "84",
            "hair_color": "black",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "24BBY",
            "gender": "male",
            "_id" : uuidv4()
        },
        {
            "name": "Obi-Wan Kenobi",
            "height": "182",
            "mass": "77",
            "hair_color": "auburn, white",
            "skin_color": "fair",
            "eye_color": "blue-gray",
            "birth_year": "57BBY",
            "gender": "male",
            "_id" : uuidv4()
        }
    ];


    personRoute
    .get('/all', (req, res) => {
        res.status(200).send(people); // successful request...
    }) // get all requests

    .get('/:name', (req, res, next) => {
        const personName = req.params.name;
        const matches = people.filter((person) => person.name === personName);

        if (matches.length === 0){
            const error = new Error('This persons name was not found...');
            res.status(404); // not found... 
            return next(error);
        };

        res.status(200).send(matches); // successful request...
    }) // gets one request 

    .post('/add', (req, res) => {
        const newPerson = req.body;
        newPerson.vin = uuidv4();
        people.push(newPerson);
        res.status(201).send(req.body); // successfully created resource...
    }) // adds new people

    .delete('/delete/:person_id', (req, res, next) => {
        const person_id = req.params.person_id;
        const personIndex = people.findIndex((person) => person.vin === person_id);
        people.splice(personIndex, 1);
        res.status(202).send(`Person has been successfully removed.`); // successfully created/updated resource. 
    }) // deletes people

    .put('/edit/:person_id', (req, res) => {
        const person_id = req.params.person_id;
        const personIndex = people.findIndex((person) => person.vin === person_id);
        const editedPerson = Object.assign(people[personIndex], req.body);
        res.status(201).send(editedPerson); // successfully created resource. 
    }); // edit people


module.exports = personRoute;