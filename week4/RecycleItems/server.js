const express = require('express');
const app = express();
const router = require('./route/recycledItems');

const PORT = 3000;



app.use(express.json())
app.use('/itemsIntake', recycledItems)





app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
})