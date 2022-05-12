"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRouter = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const feedback_controller_1 = require("../controllers/feedback-controller");
exports.feedbackRouter = (0, express_1.Router)();
exports.feedbackRouter.post('/', (0, express_async_handler_1.default)(feedback_controller_1.feedbackRegister));
exports.feedbackRouter.get('/', (0, express_async_handler_1.default)(feedback_controller_1.feedbackGetList));
exports.feedbackRouter.get('/:id', (0, express_async_handler_1.default)(feedback_controller_1.feedbackGetInfo));
exports.feedbackRouter.patch('/:id', (0, express_async_handler_1.default)(feedback_controller_1.feedbackModify));
exports.feedbackRouter.delete('/:id', (0, express_async_handler_1.default)(feedback_controller_1.feedbackRemove));
