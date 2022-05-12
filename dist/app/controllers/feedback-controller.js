"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRemove = exports.feedbackModify = exports.feedbackGetList = exports.feedbackGetInfo = exports.feedbackRegister = void 0;
const feedback_models_1 = require("../models/feedback-models");
function feedbackRegister(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const feedback = new feedback_models_1.Feedback({
                titleFeedback: req.body.titleFeedback,
                levelFeedback: req.body.levelFeedback,
                textFeedback: req.body.textFeedback,
                evaluated: req.body.evaluated
            });
            const createdFeedback = yield feedback.save();
            res.json({
                titleFeedback: createdFeedback.titleFeedback,
                levelFeedback: createdFeedback.levelFeedback,
                textFeedback: createdFeedback.textFeedback,
                evaluated: req.body.evaluated,
                message: "Feedback registrado com sucesso!",
            });
        }
        catch (error) {
            if (error.toString().includes('required')) {
                res.status(401).send({ message: 'Preencha todos os campos!' });
            }
            else {
                res.status(401).send({ message: error });
            }
        }
    });
}
exports.feedbackRegister = feedbackRegister;
function feedbackGetInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const feedback = yield feedback_models_1.Feedback.findById(req.params.id);
        if (feedback) {
            res.send(feedback);
        }
        else {
            res.status(404).send({ message: "Feedback não encontrado!" });
        }
    });
}
exports.feedbackGetInfo = feedbackGetInfo;
function feedbackGetList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const feedbacks = yield feedback_models_1.Feedback.find({});
        try {
            if (feedbacks) {
                res.send(feedbacks);
            }
        }
        catch (e) {
            res.status(404).send({ message: e });
        }
    });
}
exports.feedbackGetList = feedbackGetList;
function feedbackModify(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const feedback = yield feedback_models_1.Feedback.findById(req.body._id);
            if (feedback) {
                feedback.titleFeedback = req.body.titleFeedback;
                feedback.levelFeedback = req.body.levelFeedback;
                feedback.textFeedback = req.body.textFeedback;
                feedback.evaluated = req.body.feedback;
                const updatedFeedback = yield feedback.save();
                res.status(200).send({
                    _id: updatedFeedback._id,
                    titleFeedback: updatedFeedback.titleFeedback,
                    levelFeedback: updatedFeedback.levelFeedback,
                    textFeedback: feedback.textFeedback,
                    message: 'Feedback atualizado.'
                });
            }
            else {
                res.status(404).send({ message: 'Feedback inexistente.' });
            }
        }
        catch (e) {
            res.status(404).send(e);
        }
    });
}
exports.feedbackModify = feedbackModify;
function feedbackRemove(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const feedback = yield feedback_models_1.Feedback.findById(req.params.id);
            if (feedback) {
                const deleteFeedback = yield feedback.remove();
                res.send({ message: "Feedback deletado.", feedback: deleteFeedback });
            }
            else {
                res.status(404).send({ message: "Feedback não encontrado." });
            }
        }
        catch (e) {
            res.status(404).send(e);
        }
    });
}
exports.feedbackRemove = feedbackRemove;
