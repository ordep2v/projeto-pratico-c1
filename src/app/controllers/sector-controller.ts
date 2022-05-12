import { Request, Response } from "express"
import { Sector } from "../models/sector-models"


export async function sectorRegister(req: Request, res: Response) {
    try {
        const sector = new Sector({
            nameSector: req.body.nameSector,
            descriptionSector: req.body.descriptionSector
        })
        const createdSector = await sector.save()
        res.json({
            nameSector: createdSector.nameSector,
            descriptionSector: createdSector.descriptionSector,
            message: "Setor criado com sucesso!",
        })
    } catch (error: any) {
        if (error.toString().includes('required')) {
            res.status(401).send({ message: 'Preencha todos os campos!' })
        } else {
            res.status(401).send({ message: error })
        }

    }
}

export async function sectorGetInfo(req: Request, res: Response) {
    const sector = await Sector.findById(req.params.id)
    if (sector) {
        res.send(sector)
    } else {
        res.status(404).send({ message: "Setor não encontrado!" })
    }
}

export async function sectorGetList(req: Request, res: Response) {
    const sectors = await Sector.find({})
    try {
        if (sectors) {
            res.send(sectors)
        }
    } catch (e: any) {
        res.status(404).send({ message: e })
    }
}

export async function sectorModify(req: Request, res: Response) {
    try {
        const sector = await Sector.findById(req.body._id)
        if (sector) {
            sector.nameSector = req.body.nameSector
            sector.descriptionSector = req.body.descriptionSector
            const updatedSector = await sector.save()
            res.status(200).send({
                _id: updatedSector._id,
                nameSector: updatedSector.nameSector,
                descriptionSector: updatedSector.descriptionSector,
                message: 'Setor atualizado.'
            })
        } else {
            res.status(404).send({ message: 'Setor inexistente.' })
        }
    } catch (e) {
        res.status(404).send(e)
    }
}

export async function sectorRemove(req: Request, res: Response) {
    try {
        const sector = await Sector.findById(req.params.id)
        if (sector) {
            const deleteSector = await sector.remove()
            res.send({ message: "Setor deletado.", sector: deleteSector })
        } else {
            res.status(404).send({ message: "Setor não encontrado." })
        }
    } catch (e) {
        res.status(404).send(e)
    }
}





