// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Error: Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Error: Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Clint',
  //   age: 24,
  //   location: 'Salt Lake City'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert user');
  //   } else {
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // });

  db.close();
});
