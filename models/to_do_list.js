const mongoose = require('mongoose');

// Creating Schema

const todolistSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

const Taskapp = mongoose.model('todolist',todolistSchema);

module.exports = Taskapp;