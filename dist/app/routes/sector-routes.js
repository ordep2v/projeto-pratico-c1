"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectorRouter = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const sector_controller_1 = require("../controllers/sector-controller");
exports.sectorRouter = (0, express_1.Router)();
exports.sectorRouter.post('/', (0, express_async_handler_1.default)(sector_controller_1.sectorRegister));
exports.sectorRouter.get('/', (0, express_async_handler_1.default)(sector_controller_1.sectorGetList));
exports.sectorRouter.get('/:id', (0, express_async_handler_1.default)(sector_controller_1.sectorGetInfo));
exports.sectorRouter.patch('/:id', (0, express_async_handler_1.default)(sector_controller_1.sectorModify));
exports.sectorRouter.delete('/:id', (0, express_async_handler_1.default)(sector_controller_1.sectorRemove));
