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
exports.sectorRemove = exports.sectorModify = exports.sectorGetList = exports.sectorGetInfo = exports.sectorRegister = void 0;
const sector_models_1 = require("../models/sector-models");
function sectorRegister(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sector = new sector_models_1.Sector({
                nameSector: req.body.nameSector,
                descriptionSector: req.body.descriptionSector
            });
            const createdSector = yield sector.save();
            res.json({
                nameSector: createdSector.nameSector,
                descriptionSector: createdSector.descriptionSector,
                message: "Setor criado com sucesso!",
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
exports.sectorRegister = sectorRegister;
function sectorGetInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sector = yield sector_models_1.Sector.findById(req.params.id);
        if (sector) {
            res.send(sector);
        }
        else {
            res.status(404).send({ message: "Setor não encontrado!" });
        }
    });
}
exports.sectorGetInfo = sectorGetInfo;
function sectorGetList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sectors = yield sector_models_1.Sector.find({});
        try {
            if (sectors) {
                res.send(sectors);
            }
        }
        catch (e) {
            res.status(404).send({ message: e });
        }
    });
}
exports.sectorGetList = sectorGetList;
function sectorModify(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sector = yield sector_models_1.Sector.findById(req.body._id);
            if (sector) {
                sector.nameSector = req.body.nameSector;
                sector.descriptionSector = req.body.descriptionSector;
                const updatedSector = yield sector.save();
                res.status(200).send({
                    _id: updatedSector._id,
                    nameSector: updatedSector.nameSector,
                    descriptionSector: updatedSector.descriptionSector,
                    message: 'Setor atualizado.'
                });
            }
            else {
                res.status(404).send({ message: 'Setor inexistente.' });
            }
        }
        catch (e) {
            res.status(404).send(e);
        }
    });
}
exports.sectorModify = sectorModify;
function sectorRemove(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sector = yield sector_models_1.Sector.findById(req.params.id);
            if (sector) {
                const deleteSector = yield sector.remove();
                res.send({ message: "Setor deletado.", sector: deleteSector });
            }
            else {
                res.status(404).send({ message: "Setor não encontrado." });
            }
        }
        catch (e) {
            res.status(404).send(e);
        }
    });
}
exports.sectorRemove = sectorRemove;
