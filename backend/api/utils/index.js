"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncDb = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _barrio = _interopRequireDefault(require("../resources/models/barrio.model"));

var syncDb = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              // await Barrios.sync();
              console.log("\n Conexion a la BD exitosa\n");
            } catch (error) {
              console.log("\n\tOcurrió un error con la conexion a la BD\n", error.message);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function syncDb() {
    return _ref.apply(this, arguments);
  };
}();

exports.syncDb = syncDb;