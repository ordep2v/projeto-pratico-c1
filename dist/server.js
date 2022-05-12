"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const person_routes_1 = require("./app/routes/person-routes");
const feedback_routes_1 = require("./app/routes/feedback-routes");
const sector_routes_1 = require("./app/routes/sector-routes");
const app = (0, express_1.default)();
(0, mongoose_1.connect)("mongodb://localhost/feedback-sys");
app.use(express_1.default.json());
app.use("/api/feedback", feedback_routes_1.feedbackRouter);
app.use("/api/person", person_routes_1.personRouter);
app.use("/api/sector", sector_routes_1.sectorRouter);
app.listen(8080, function () {
    console.log('on em localhost');
});
