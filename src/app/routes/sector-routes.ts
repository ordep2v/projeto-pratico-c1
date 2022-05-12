import { Router } from "express"
import expressAsyncHandler from "express-async-handler"
import { sectorGetInfo, sectorGetList, sectorModify, sectorRegister, sectorRemove } from "../controllers/sector-controller"

export const sectorRouter = Router()

sectorRouter.post('/', expressAsyncHandler(sectorRegister))

sectorRouter.get('/', expressAsyncHandler(sectorGetList))

sectorRouter.get('/:id', expressAsyncHandler(sectorGetInfo))

sectorRouter.patch('/:id', expressAsyncHandler(sectorModify))

sectorRouter.delete('/:id', expressAsyncHandler(sectorRemove))