"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const mongoose_1 = require("mongoose");
const personSchema = new mongoose_1.Schema({
    namePerson: { type: String, required: true },
    emailPerson: { type: String, required: true, unique: true },
    sector: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Person = mongoose_1.models.Person || (0, mongoose_1.model)("Person", personSchema);
