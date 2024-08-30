import { Router } from 'express';

import{
    getAllActas,
    getActaById,
    createActa,
    updateActa,
    deleteActa
} from '../controllers/acta_controller.js'

const router = Router()

router.get('/actas', getAllActas)
router.get('/acta/:id', getActaById);
router.post('/new-acta', createActa);
router.put('/acta/:id', updateActa);
router.delete('/acta/:id', deleteActa);

export default router;