"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _productos = _interopRequireDefault(require("../controllers/productos.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getPrueba = _productos["default"].getPrueba,
    crearProducto = _productos["default"].crearProducto,
    listarProductos = _productos["default"].listarProductos,
    borrarProducto = _productos["default"].borrarProducto,
    editarProducto = _productos["default"].editarProducto;
var router = (0, _express.Router)(); //guardo una instancia

router.route('/').get(listarProductos).post(crearProducto);
router.route('/:id')["delete"](borrarProducto).put(editarProducto);
var _default = router;
exports["default"] = _default;