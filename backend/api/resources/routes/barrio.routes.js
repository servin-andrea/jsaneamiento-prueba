"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _barrio = require("../controllers/barrio.controller");

var router = (0, _express.Router)();
router.get('/', _barrio.getPerPage);
router.get('/:id', _barrio.getById);
router.post('/', _barrio.create);
router.put('/:id', _barrio.update);
router["delete"]('/:id', _barrio.deleteById);
var _default = router;
exports["default"] = _default;