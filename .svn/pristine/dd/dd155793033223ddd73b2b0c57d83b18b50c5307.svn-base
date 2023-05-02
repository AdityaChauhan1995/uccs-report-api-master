var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var encHelper = require('../helpers/encryption-helper');
const uuidv4 = require('uuid/v4');

var userSchema = new Schema({
  "name": { type: String},
  "email": { type: String },
  "password": "",
  "session_id": { type: String },
  "session_created_date": "",
  "session_modified_date": "",
});

var User = mongoose.model('User', userSchema);

module.exports.register = function ({name, email, password}, callback) {
  // encrypt the password before storing
  var user = new User({
    name: name,
    email: email,
    password: encHelper.encrypt(password)
  });

  user.save(function (err, doc) {
    if (err) {
      callback({
        code: -1,
        message: err.message,
      })
    } else {
      callback({
        code: 0,
        message: "User Registered Successfully!",
      })
    }
  })
}

module.exports.login = function ({email, password}, callback) {
  
  console.log(email,password)
  var query = { email: email, password: encHelper.encrypt(password) };
  var options = {new: true};
  User.findOneAndUpdate(query, 
    { session_id: uuidv4(), session_created_date: Date.now(), session_modified_date: Date.now()  }, 
    options, 
    function(err, doc){
      if(err || !doc){
        callback({code: -1, message: 'Invalid Credentials'})
      }else{
        callback({code: 0, message: 'User Logged In Successfully', response: {sessionId: doc.session_id,name:doc.name}})
      }
    }
  )
}

module.exports.getUserBySessionId = function(sessionId, callback){
  var query = { session_id: sessionId };
  var options = {};
  User.findOne(query, function(err, doc){
    if(err || !doc){
      callback({code: -1, message: 'Invalid Session'})
    }else{
      // got session, check if session
      // TODO: validate last modified date and current timestamp
      let sessionValid = true;
      if(sessionValid){
        User.findByIdAndUpdate(doc._id, {session_modified_date: Date.now()}, function(err, doc){
          if(err || !doc){
            callback({code: -1, message: 'Invalid Session'})
          }else{
            callback({code: 0, message: '', _id: doc._id, name: doc.name, email: doc.email});
          }  
        })
      }else{
        callback({code: -1, message: 'Invalid Session'})
      }      
    }
  })
}

module.exports.logout = function ({_id}, callback) {
  User.findByIdAndUpdate(_id, {session_id: null, session_modified_date: null, session_created_date: null}, function(err, doc){
    if(err || !doc){
      callback({code: -1, message: 'Unable to properly logout'})
    }else{
      callback({code: 0, message: 'User Logged Out Successfully',});
    }  
  })
}

module.exports.getUserById = function (id,callback){
    User.findById(id,callback)
}