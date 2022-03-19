"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPerPage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _barrio = _interopRequireDefault(require("../services/barrio.services"));

var getPerPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /*
            let page = req.query.page
            let size = req.query.size
            if(!page && !size) {
                const result = await BarrioServices.getPerPage(0, 5)
                res.status(200).json(result).end()
            } else if ((!page && size) || (page && !size)) {
                res.status(400).json({ message: 'El modelo del query es ?page=x&size=x'}).end()
            } else {
                page = Number(page)
                size = Number(size)
                if(isNaN(page) || isNaN(size) || page < 0 || size < 0) {
                    res.status(400).json({ message: 'page y size deben ser enteros y no deben ser menores a 0'}).end()
                } else {
                    const result = await BarrioServices.getPerPage(page, size)
                    res.status(200).json(result).end()
                }
            }
            */
            res.status(200).json({
              message: "hola"
            }).end();

          case 1:
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
/*

export const getById = async (req, res) => {
    const id = req.params.id
    if(isNaN(Number(id))) {
        res.status(400).json({ message: 'El id debe ser tipo entero' }).end()
    } else {
        const result = await BarrioServices.getById(id)
        if(result) {
            res.status(200).json(result).end()
        } else {
            res.status(404).end()
        }
    }
}

export const create = async (req, res) => {
    const Nombre = req.body.Nombre
    if(Nombre) {
        const result = await BarrioServices.create({Nombre})
        res.status(201).json(result).end()
    } else {
        res.status(400).json({ message: 'Nombre es un campo requerido'}).end()
    }
}

export const update = async (req, res) => {
    const id = req.params.id
    if(isNaN(Number(id))) {
        res.status(400).json({ message: 'El id debe ser tipo entero' }).end()
    } else {
        const actualData = await BarrioServices.getById(id)
        if(actualData) {
            await BarrioServices.update(actualData, req.body, id)
            res.status(200).end()
        } else {
            res.status(404).end()
        }
    }
}

export const deleteById = async (req, res) => {
    const id = req.params.id
    if(isNaN(Number(id))) {
        res.status(400).json({ message: 'El id debe ser tipo entero' }).end()
    } else {
        const result = await BarrioServices.deleteById(id)
        result? res.status(200).end() : res.status(404).end()
    }
}

*/


exports.getPerPage = getPerPage;