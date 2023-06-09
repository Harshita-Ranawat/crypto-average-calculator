const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username Cannot be blank']
  },
  email : {
    type : String,
    required:[true, 'Please Enter Email'],
    unique:true
  },
  password: {
    type: String,
    required: [true, 'Password cannot be blank']
  },
 


},
{collection:'userdata'}
)

module.exports = mongoose.model('UserData', userschema);