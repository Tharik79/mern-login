var express = require('express');
const studentModel = require('../models/student-model');
var router = express.Router();
var mongoose = require('mongoose');

/* GET student listing. */
router.get('/', function(req, res, next) {
  res.send('student data created');
});

/* GET student static entered value on the browser url */
router.get('/addstaticvalue', function(req, res, next) {

    let newStudent = new studentModel({
        firstName:"THARIK",
        lastName: "UTHUMAN",
        age:40,
        
    })


    newStudent.save(function(err, newStudent){
        if(err)
        res.send(err);
        else
        res.send({status:200, message:"student static value created sucessfully", studentObj: newStudent});
    })
    


  });


module.exports = router;
