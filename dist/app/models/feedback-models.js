"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const mongoose_1 = require("mongoose");
const feedbackSchema = new mongoose_1.Schema({
    titleFeedback: { type: String, required: true },
    levelFeedback: { type: Number, required: true },
    textFeedback: { type: String, required: true },
    evaluated: { type: String, required: true },
});
exports.Feedback = mongoose_1.models.Feedback || (0, mongoose_1.model)("Feedback", feedbackSchema);
