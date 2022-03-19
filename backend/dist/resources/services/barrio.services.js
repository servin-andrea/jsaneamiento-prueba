"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _barrio = _interopRequireDefault(require("../models/barrio.model"));

var getById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _barrio["default"].findByPk(id);

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result === null || result === void 0 ? void 0 : result.dataValues);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getById(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getPerPage = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(page, size) {
    var result, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _barrio["default"].findAndCountAll({
              limit: size,
              offset: page * size
            });

          case 2:
            result = _context2.sent;
            data = {
              previousPage: page ? page - 1 : null,
              actualPage: page,
              nextPage: page + 1 < Math.ceil(result.count / size) ? page + 1 : null,
              totalPages: Math.ceil(result.count / size),
              content: result.rows
            };
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPerPage(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var create = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(object) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _barrio["default"].create(object);

          case 2:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function create(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

var update = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(actualData, newData, id) {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _barrio["default"].update({
              Nombre: (newData === null || newData === void 0 ? void 0 : newData.Nombre) || actualData.Nombre
            }, {
              where: {
                Id: id
              }
            });

          case 2:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function update(_x5, _x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

var deleteById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _barrio["default"].destroy({
              where: {
                Id: id
              }
            });

          case 2:
            result = _context5.sent;
            return _context5.abrupt("return", result);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteById(_x8) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = {
  getPerPage: getPerPage,
  getById: getById,
  create: create,
  update: update,
  deleteById: deleteById
};
exports["default"] = _default;