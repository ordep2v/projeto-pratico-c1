import { Router } from "express"
import expressAsyncHandler from "express-async-handler"
import { feedbackGetInfo, feedbackGetList, feedbackModify, feedbackRegister, feedbackRemove } from "../controllers/feedback-controller"

export const feedbackRouter = Router()

feedbackRouter.post('/', expressAsyncHandler(feedbackRegister))

feedbackRouter.get('/', expressAsyncHandler(feedbackGetList))

feedbackRouter.get('/:id', expressAsyncHandler(feedbackGetInfo))

feedbackRouter.patch('/:id', expressAsyncHandler(feedbackModify))

feedbackRouter.delete('/:id', expressAsyncHandler(feedbackRemove))