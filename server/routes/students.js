var express = require('express');
const studentModel = require('../models/student-model');
var router = express.Router();
var mongoose = require('mongoose');

/* GET student listing. */
router.get('/', function(req, res, next) {
  res.send('student data created');
});

/* GET student static entered value on the browser url */
// router.get('/addstaticvalue', function(req, res, next) {

//     let newStudent = new studentModel({
//         firstName:"THARIK",
//         lastName: "UTHUMAN",
//         age:40,
        
//     })

//     newStudent.save(function(err, newStudent){
//         if(err)
//         res.send(err);
//         else
//         res.send({status:200, message:"student static value created sucessfully", studentObj: newStudent});
//     })
    


//   });

// POST method to add a new data to students collection in mongodb.
 
router.post('/add', function(req, res, next) {

    let newStudent = new studentModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        email:req.body.email
        
    });

    newStudent.save(function(err, newStudent){
        if(err)
        res.send(err);
        else
        res.send({status:200, message:"student data created sucessfully", studentObj: newStudent});
    })
    


  });


//UPDATE ONE is updating first document only.
router.put('/update', function(req, res, next) {

    let firstName = req.query.firstName;
    studentModel.updateOne( {firstName:firstName}, function(err, response){
        if(err)
        res.send(err);
        else
        res.send({status:200, students: response})
    }

    )
        
    });


router.delete('/delete', function(req, res, next) {

        let firstName = req.query.firstName;
        studentModel.findOneAndDelete( {firstName:firstName}, function(err, response){
            if(err)
            res.send(err);
            else
            res.send({status:200, students: response})
        });
    });


module.exports = router;
