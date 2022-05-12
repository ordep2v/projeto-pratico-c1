import { Schema, model, models } from 'mongoose'
import { IFeedbackProps } from '../utils/types'

const feedbackSchema = new Schema<IFeedbackProps>(
    {
        titleFeedback: { type: String, required: true },
        levelFeedback: { type: Number, required: true },
        textFeedback: { type: String, required: true },
        evaluated: { type: String, required: true },

    }
)

export const Feedback = models.Feedback || model<IFeedbackProps>("Feedback", feedbackSchema)
