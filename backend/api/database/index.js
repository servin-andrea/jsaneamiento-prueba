"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DataTypes", {
  enumerable: true,
  get: function get() {
    return _sequelize.DataTypes;
  }
});
exports.ORM = void 0;

var _sequelize = require("sequelize");

var _config = _interopRequireDefault(require("../config"));

var ORM = new _sequelize.Sequelize(_config["default"].DB_DATABASE, _config["default"].DB_USER, _config["default"].DB_PASSWORD, {
  dialect: 'mysql',
  port: _config["default"].DB_PORT,
  host: _config["default"].DB_SERVER,
  logging: false,
  pool: {
    max: 5,
    min: 0
  }
});
exports.ORM = ORM;