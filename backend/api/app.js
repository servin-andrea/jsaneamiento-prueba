"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("./config"));

var _barrio = _interopRequireDefault(require("./resources/routes/barrio.routes"));

var _utils = require("./utils");

var app = (0, _express["default"])(); //settings

app.set('port', _config["default"].PORT); //syncDb()
//middlewares

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])()); //routes

app.use('/api/barrios', _barrio["default"]);
app.use('/', function (req, res) {
  res.send({
    message: "Hello World!"
  });
});
var _default = app;
exports["default"] = _default;