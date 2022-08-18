const express = require('express');
const app = express();

const PORT = 3000;



app.listen(PORT, () => {
    console.log(`This particular server began on ${PORT}`);
});


app.get('/movies', (req, res) => {
    res.send({name: "Dumb & Dumber"})
});

app.get('/actor', (req, res) => {
    res.send({name: "Jim Carrey"})
});

app.get('/character', (req, res) => {
    res.send({name: "Lloyd Christmas"})
});