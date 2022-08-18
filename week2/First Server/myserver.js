const express = require('express');
const app = express();
const PORT = 3000;


 
app.listen(PORT, ()=> {
    console.log(`The server began on ${PORT}`);
});


app.get('/family/1', (req, res) => {
    res.send({name: "Brandon", age: 36, gender: "male"})
});
app.get('/family/2', (req, res) => {
    res.send({name: "Annabelle", age: 12, gender: "female"})
});
app.get('/family/3', (req, res) => {
    res.send({name: "Mew", age: 1, gender: "male"})
});