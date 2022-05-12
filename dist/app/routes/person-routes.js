"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personRouter = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const person_controller_1 = require("../controllers/person-controller");
exports.personRouter = (0, express_1.Router)();
exports.personRouter.post('/', (0, express_async_handler_1.default)(person_controller_1.personRegister));
exports.personRouter.get('/', (0, express_async_handler_1.default)(person_controller_1.personGetList));
exports.personRouter.get('/:id', (0, express_async_handler_1.default)(person_controller_1.personGetInfo));
exports.personRouter.patch('/:id', (0, express_async_handler_1.default)(person_controller_1.personModify));
exports.personRouter.delete('/:id', (0, express_async_handler_1.default)(person_controller_1.personRemove));
