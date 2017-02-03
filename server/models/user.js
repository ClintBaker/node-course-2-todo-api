var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    required: true,
    trim: true,
    type: String,
    minlength: 1
  }
})

module.exports = {User};


// var cj = new User({
//   email: 'clint@delasierra.com'
// })
//
// cj.save().then((doc) => {
//   console.log(doc, undefined, 2);
// }, (e) => {
//   console.log('Unable to save user', e)
// })
