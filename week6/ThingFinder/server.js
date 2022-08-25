const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 3002;

const thingRouter = require('./routes/thingRouter');




// middleware
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/items', thingRouter);

// startup
app.listen(PORT, () => {
    console.log('Server started on port: 3002!')
}); 