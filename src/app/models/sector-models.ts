import { Schema, model, models } from 'mongoose'
import { ISectorProps } from '../utils/types'

const sectorSchema = new Schema<ISectorProps>(
    {
        nameSector: { type: String, required: true },
        descriptionSector: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

export const Sector = models.Sector || model<ISectorProps>("Sector", sectorSchema)
