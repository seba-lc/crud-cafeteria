// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


import mongoose from 'mongoose';

const url = 'mongodb+srv://seba-lc:pepperonilc@rolling.z5olm.mongodb.net/test';

mongoose.connect(url)

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('BD conectada');
})
