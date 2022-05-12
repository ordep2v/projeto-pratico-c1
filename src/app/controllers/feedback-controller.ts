import { Request, Response } from "express"
import { Feedback } from "../models/feedback-models"

export async function feedbackRegister(req: Request, res: Response) {
    try {
        const feedback = new Feedback({
            titleFeedback: req.body.titleFeedback,
            levelFeedback: req.body.levelFeedback,
            textFeedback: req.body.textFeedback,
            evaluated: req.body.evaluated
        })
        const createdFeedback = await feedback.save()
        res.json({
            titleFeedback: createdFeedback.titleFeedback,
            levelFeedback: createdFeedback.levelFeedback,
            textFeedback: createdFeedback.textFeedback,
            evaluated: req.body.evaluated,
            message: "Feedback registrado com sucesso!",
        })
    } catch (error: any) {
        if (error.toString().includes('required')) {
            res.status(401).send({ message: 'Preencha todos os campos!' })
        } else {
            res.status(401).send({ message: error })
        }
    }
}

export async function feedbackGetInfo(req: Request, res: Response) {
    const feedback = await Feedback.findById(req.params.id)
    if (feedback) {
        res.send(feedback)
    } else {
        res.status(404).send({ message: "Feedback não encontrado!" })
    }
}

export async function feedbackGetList(req: Request, res: Response) {
    const feedbacks = await Feedback.find({})
    try {
        if (feedbacks) {
            res.send(feedbacks)
        }
    } catch (e: any) {
        res.status(404).send({ message: e })
    }
}

export async function feedbackModify(req: Request, res: Response) {
    try {
        const feedback = await Feedback.findById(req.body._id)
        if (feedback) {
            feedback.titleFeedback = req.body.titleFeedback
            feedback.levelFeedback = req.body.levelFeedback
            feedback.textFeedback = req.body.textFeedback
            feedback.evaluated = req.body.feedback
            const updatedFeedback = await feedback.save()
            res.status(200).send({
                _id: updatedFeedback._id,
                titleFeedback: updatedFeedback.titleFeedback,
                levelFeedback: updatedFeedback.levelFeedback,
                textFeedback: feedback.textFeedback,
                message: 'Feedback atualizado.'
            })
        } else {
            res.status(404).send({ message: 'Feedback inexistente.' })
        }
    } catch (e) {
        res.status(404).send(e)
    }
}

export async function feedbackRemove(req: Request, res: Response) {
    try {
        const feedback = await Feedback.findById(req.params.id)
        if (feedback) {
            const deleteFeedback = await feedback.remove()
            res.send({ message: "Feedback deletado.", feedback: deleteFeedback })
        } else {
            res.status(404).send({ message: "Feedback não encontrado." })
        }
    } catch (e) {
        res.status(404).send(e)
    }
}





