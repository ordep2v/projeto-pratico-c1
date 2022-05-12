import { IUserProps } from "../models/feedback-models";

interface IPersonProps {
    _id?: string
    namePerson: string,
    emailPerson: string,
    sector: string
}

export interface IFeedbackProps {
    _id?: string,
    titleFeedback: string,
    levelFeedback: number,
    textFeedback: string,
    evaluated: string
}

export interface ISectorProps {
    _id?: string,
    nameSector: string,
    descriptionSector: string
}

