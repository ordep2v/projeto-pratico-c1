import { Request, Response } from "express"
import { Person } from "../models/person-models"


export async function personRegister(req: Request, res: Response) {
    const personRegisteredEmail = await Person.findOne({ email: req.body.email })
    try {
        if (personRegisteredEmail === null) {
            const person = new Person({
                namePerson: req.body.namePerson,
                emailPerson: req.body.emailPerson,
                sector: req.body.sector
            })
            const createdPerson = await person.save()
            res.json({
                namePerson: createdPerson.namePerson,
                emailPerson: createdPerson.emailPerson,
                sector: createdPerson.sector,
                message: "Pessoa cadastrada com sucesso!",
            })
        } else {
            res.status(401).send({ message: 'Esse email já está cadastrado.' })
        }
    } catch (error: any) {
        if (error.toString().includes('required')) {
            res.status(401).send({ message: 'Preencha todos os campos!' })
        } else {
            res.status(401).send({ message: error })
        }

    }
}

export async function personGetInfo(req: Request, res: Response) {
    const person = await Person.findById(req.params.id)
    if (person) {
        res.send(person)
    } else {
        res.status(404).send({ message: "Pessoa não encontrada!" })
    }
}

export async function personGetList(req: Request, res: Response) {
    const persons = await Person.find({})
    try {
        if (persons) {
            res.send(persons)
        }
    } catch (e: any) {
        res.status(404).send({ message: e })
    }
}

export async function personModify(req: Request, res: Response) {
    try {
        const person = await Person.findById(req.body._id)
        if (person) {
            person.namePerson = req.body.namePerson
            person.emailPerson = req.body.emailPerson
            person.sector = req.body.sector
            const updatedPerson = await person.save()
            res.status(200).send({
                _id: updatedPerson._id,
                namePerson: updatedPerson.namePerson,
                emailPerson: updatedPerson.emailPerson,
                sector: person.sector,
                message: 'Pessoa atualizada.'
            })
        } else {
            res.status(404).send({ message: 'Pessoa inexistente.' })
        }
    } catch (e) {
        res.status(404).send(e)
    }
}

export async function personRemove(req: Request, res: Response) {
    try {
        const person = await Person.findById(req.params.id)
        if (person) {
            const deletePerson = await person.remove()
            res.send({ message: "Pessoa deletada.", person: deletePerson })
        } else {
            res.status(404).send({ message: "Pessoa não encontrada." })
        }
    } catch (e) {
        res.status(404).send(e)
    }
}





