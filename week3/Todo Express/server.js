const express = require('express');
const app = express();
const intakeRouter = require('./routes/items.js');


const PORT = 3000;


app.use(express.json());
app.use('/items', intakeRouter);
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`);
});