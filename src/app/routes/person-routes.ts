import { Router } from "express"
import expressAsyncHandler from "express-async-handler"
import { personGetInfo, personGetList, personModify, personRegister, personRemove } from "../controllers/person-controller"

export const personRouter = Router()

personRouter.post('/', expressAsyncHandler(personRegister))

personRouter.get('/', expressAsyncHandler(personGetList))

personRouter.get('/:id', expressAsyncHandler(personGetInfo))

personRouter.patch('/:id', expressAsyncHandler(personModify))

personRouter.delete('/:id', expressAsyncHandler(personRemove))