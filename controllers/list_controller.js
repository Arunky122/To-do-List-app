// Require models 
const Taskapp = require('../models/to_do_list');


// Home Page url

module.exports.list = function(req,res){

    Taskapp.find({},function(err,toDolist){
        if(err){
            console.log("error in printing list",err);
            return;
        }

        return res.render('home',{
            title:"To Do List",
            todo_list:toDolist
    });
  
    
        
    });
}

// Creating list in database
module.exports.createList = function(req,res){
    Taskapp.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newList){
        if(err){
            console.log("error in creating list",err);
            return;
        }
        console.log("########",newList);
        return res.redirect('back');
    });
}



// Deleteing multiple task from the database

module.exports.DeleteList = function(req, res) {
    let ids = req.body.task;
    // if single task is to be deleted
    if (typeof(ids) == "string") {
        Taskapp.findByIdAndDelete(ids, function(err) {
            if (err) { 
                console.log("error in deleting"); 
                return; 
            }
        });
    } else {   
        
        // if multiple task is to be deleted
        for (let i = 0; i < ids.length; i++) {
            Taskapp.findByIdAndDelete(ids[i], function (err) {
                if (err) { 
                    console.log("error in deleting");
                    return; 
                }
            });
        }
    }
    return res.redirect('back');
};