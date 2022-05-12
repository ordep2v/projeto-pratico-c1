import { Schema, model, models } from 'mongoose'
import { IPersonProps } from '../utils/types'

const personSchema = new Schema<IPersonProps>(
    {
        namePerson: { type: String, required: true },
        emailPerson: { type: String, required: true, unique: true },
        sector: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

export const Person = models.Person || model<IPersonProps>("Person", personSchema)
