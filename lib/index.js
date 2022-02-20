"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _productos = _interopRequireDefault(require("./routes/productos.routes"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const express = require('express');
//settings
var app = (0, _express["default"])(); //estoy creando así una instancia de express.
// configuración del puerto

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), function () {
  console.log(_path["default"].join(__dirname, "../public"));
  console.log('sever on port ' + app.get('port'));
}); //middlewares

app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])()); //lo siguiente es para que entienda a los JSON

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); //aqui agrego la carpeta public

app.use(_express["default"]["static"](_path["default"].join(__dirname, "../public"))); //ruta

app.use('/api/cafeteria', _productos["default"]);