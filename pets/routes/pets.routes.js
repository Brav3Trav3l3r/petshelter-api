import express from 'express'
const router = express.Router()

import {listPets, getPet, editPet, addPet, deletePet} from '../controllers/pets.controllers.js'

router.get('/', listPets)
router.get('/:id', getPet)
router.put('/:id', listPets)
router.post('/', addPet)
router.delete('/:id', deletePet)

export default router