"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sector = void 0;
const mongoose_1 = require("mongoose");
const sectorSchema = new mongoose_1.Schema({
    nameSector: { type: String, required: true },
    descriptionSector: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Sector = mongoose_1.models.Sector || (0, mongoose_1.model)("Sector", sectorSchema);
