"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.getPerPage = exports.getById = exports.deleteById = exports.create = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _barrio = _interopRequireDefault(require("../services/barrio.services"));

var getPerPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var page, size, result, _result;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = req.query.page;
            size = req.query.size;

            if (!(!page && !size)) {
              _context.next = 9;
              break;
            }

            _context.next = 5;
            return _barrio["default"].getPerPage(0, 5);

          case 5:
            result = _context.sent;
            res.status(200).json(result).end();
            _context.next = 23;
            break;

          case 9:
            if (!(!page && size || page && !size)) {
              _context.next = 13;
              break;
            }

            res.status(400).json({
              message: 'El modelo del query es ?page=x&size=x'
            }).end();
            _context.next = 23;
            break;

          case 13:
            page = Number(page);
            size = Number(size);

            if (!(isNaN(page) || isNaN(size) || page < 0 || size < 0)) {
              _context.next = 19;
              break;
            }

            res.status(400).json({
              message: 'page y size deben ser enteros y no deben ser menores a 0'
            }).end();
            _context.next = 23;
            break;

          case 19:
            _context.next = 21;
            return _barrio["default"].getPerPage(page, size);

          case 21:
            _result = _context.sent;
            res.status(200).json(_result).end();

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPerPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPerPage = getPerPage;

var getById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;

            if (!isNaN(Number(id))) {
              _context2.next = 5;
              break;
            }

            res.status(400).json({
              message: 'El id debe ser tipo entero'
            }).end();
            _context2.next = 9;
            break;

          case 5:
            _context2.next = 7;
            return _barrio["default"].getById(id);

          case 7:
            result = _context2.sent;

            if (result) {
              res.status(200).json(result).end();
            } else {
              res.status(404).end();
            }

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getById = getById;

var create = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var Nombre, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            Nombre = req.body.Nombre;

            if (!Nombre) {
              _context3.next = 8;
              break;
            }

            _context3.next = 4;
            return _barrio["default"].create({
              Nombre: Nombre
            });

          case 4:
            result = _context3.sent;
            res.status(201).json(result).end();
            _context3.next = 9;
            break;

          case 8:
            res.status(400).json({
              message: 'Nombre es un campo requerido'
            }).end();

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function create(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.create = create;

var update = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, actualData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;

            if (!isNaN(Number(id))) {
              _context4.next = 5;
              break;
            }

            res.status(400).json({
              message: 'El id debe ser tipo entero'
            }).end();
            _context4.next = 15;
            break;

          case 5:
            _context4.next = 7;
            return _barrio["default"].getById(id);

          case 7:
            actualData = _context4.sent;

            if (!actualData) {
              _context4.next = 14;
              break;
            }

            _context4.next = 11;
            return _barrio["default"].update(actualData, req.body, id);

          case 11:
            res.status(200).end();
            _context4.next = 15;
            break;

          case 14:
            res.status(404).end();

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function update(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.update = update;

var deleteById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;

            if (!isNaN(Number(id))) {
              _context5.next = 5;
              break;
            }

            res.status(400).json({
              message: 'El id debe ser tipo entero'
            }).end();
            _context5.next = 9;
            break;

          case 5:
            _context5.next = 7;
            return _barrio["default"].deleteById(id);

          case 7:
            result = _context5.sent;
            result ? res.status(200).end() : res.status(404).end();

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteById = deleteById;