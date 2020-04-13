const express = require('express');
const app = express();
const path = require('path');

const port = 8001;

//Require Mongoose
const db = require('./config/mongoose');

const Taskapp = require('./models/to_do_list.js');


// use express routes


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middleware
app.use(express.urlencoded());

app.use('/',require('./routes'));
//accessing static files

app.use(express.static('assets'));









// SERVER
app.listen(port,function(err){
    if(err){
        // Interpolation ( ``)
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});