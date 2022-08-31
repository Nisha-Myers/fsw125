const express = require('express');
const app = express();



//* packages
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

//* port
const PORT = 3200;
const personRoute = require('./routes/personRoute');

//* middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*'
}));


//* router
app.use('/people', personRoute); 

//* error Handling
app.use((error, req, res, next) => {  
    return res.send({errMsg: error.message})  
});


//* server startup
app.listen(PORT, () => {
    console.log(`This server started on port: ${PORT}`);
});