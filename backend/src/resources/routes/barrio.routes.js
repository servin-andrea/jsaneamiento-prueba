import { Router } from 'express'

import { getPerPage, getById, create, update, deleteById } from '../controllers/barrio.controller'

const router = Router()

router.get('/', getPerPage)
//router.get('/:id', getById)
//router.post('/', create)
//router.put('/:id', update)
//router.delete('/:id', deleteById)

export default router 