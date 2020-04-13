const express = require('express');
const router = express.Router();

const listController = require('../controllers/list_controller.js');

console.log("router  loaded");

// For home url 

router.get('/',listController.list);

//For creating List 

router.post('/create-list',listController.createList);

//For deleting list 

router.post('/delete-multiple',listController.DeleteList);





module.exports = router;
