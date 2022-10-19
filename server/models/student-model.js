var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
  });

  var studentModel = mongoose.model("student", studentSchema);

  module.exports = studentModel;


