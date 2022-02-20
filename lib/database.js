"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');
// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
var url = 'mongodb://localhost:27017/cafeteria';

_mongoose["default"].connect(url);

var connection = _mongoose["default"].connection;
connection.once('open', function () {
  console.log('BD conectada');
});