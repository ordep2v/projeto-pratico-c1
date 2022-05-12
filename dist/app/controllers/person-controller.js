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
exports.personRemove = exports.personModify = exports.personGetList = exports.personGetInfo = exports.personRegister = void 0;
const person_models_1 = require("../models/person-models");
function personRegister(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const personRegisteredEmail = yield person_models_1.Person.findOne({ email: req.body.email });
        try {
            if (personRegisteredEmail === null) {
                const person = new person_models_1.Person({
                    namePerson: req.body.namePerson,
                    emailPerson: req.body.emailPerson,
                    sector: req.body.sector
                });
                const createdPerson = yield person.save();
                res.json({
                    namePerson: createdPerson.namePerson,
                    emailPerson: createdPerson.emailPerson,
                    sector: createdPerson.sector,
                    message: "Pessoa cadastrada com sucesso!",
                });
            }
            else {
                res.status(401).send({ message: 'Esse email já está cadastrado.' });
            }
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
exports.personRegister = personRegister;
function personGetInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const person = yield person_models_1.Person.findById(req.params.id);
        if (person) {
            res.send(person);
        }
        else {
            res.status(404).send({ message: "Pessoa não encontrada!" });
        }
    });
}
exports.personGetInfo = personGetInfo;
function personGetList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const persons = yield person_models_1.Person.find({});
        try {
            if (persons) {
                res.send(persons);
            }
        }
        catch (e) {
            res.status(404).send({ message: e });
        }
    });
}
exports.personGetList = personGetList;
function personModify(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const person = yield person_models_1.Person.findById(req.body._id);
            if (person) {
                person.namePerson = req.body.namePerson;
                person.emailPerson = req.body.emailPerson;
                person.sector = req.body.sector;
                const updatedPerson = yield person.save();
                res.status(200).send({
                    _id: updatedPerson._id,
                    namePerson: updatedPerson.namePerson,
                    emailPerson: updatedPerson.emailPerson,
                    sector: person.sector,
                    message: 'Pessoa atualizada.'
                });
            }
            else {
                res.status(404).send({ message: 'Pessoa inexistente.' });
            }
        }
        catch (e) {
            res.status(404).send(e);
        }
    });
}
exports.personModify = personModify;
function personRemove(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const person = yield person_models_1.Person.findById(req.params.id);
            if (person) {
                const deletePerson = yield person.remove();
                res.send({ message: "Pessoa deletada.", person: deletePerson });
            }
            else {
                res.status(404).send({ message: "Pessoa não encontrada." });
            }
        }
        catch (e) {
            res.status(404).send(e);
        }
    });
}
exports.personRemove = personRemove;
