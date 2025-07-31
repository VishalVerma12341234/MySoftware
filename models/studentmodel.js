const mongoose = require('mongoose');
const studentmodel = mongoose.model("studata",mongoose.Schema({
    rollno:{type:String},
    name:{typre:String},
    address:{type:String}
}));
module.exports = studentmodel;

