"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _config = _interopRequireDefault(require("./config"));

require("@babel/polyfill");

_app["default"].listen(_app["default"].get('port'), function () {
  console.log("\nready - started server on http://localhost:".concat(_config["default"].PORT, "\n"));
});