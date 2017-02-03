// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Error: Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  //findONeAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58854adc5e4ca8638e1f8186')
  // }, {
  //     $set: {
  //       completed: true
  //     }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('588547845e4ca8638e1f8084')
  }, {

    $set: {
      name: 'Clint'
    },
    $inc: {
      age: -2
    }

  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
