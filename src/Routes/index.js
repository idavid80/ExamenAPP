import {Router} from 'express';
import {home} from '../Controller/indexRoutes.js'

Router();


const router = Router();

//Envio de variables dentro del render
router.get('/', home);

export default router;