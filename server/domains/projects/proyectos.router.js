// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import proyectsController from './proyectos.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
router.get('/projects', proyectsController.projects);
// Enrutamos
router.get('/add', proyectsController.add);
// Exporto este tramo de ruta
export default router;
