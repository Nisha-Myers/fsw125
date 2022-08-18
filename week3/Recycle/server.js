const express = require('express');
const app = express();
const router = require('./route/items.js');

const PORT = 3000;



app.use(express.json());
app.use('/items', router);

app.listen(PORT, () => {
    console.log(`This particular app started on port: ${PORT}`);
});