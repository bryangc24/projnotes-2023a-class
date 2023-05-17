// Importando enrutador home
import homeRouter from './domains/home/home.router';
// Importando enrutador user
import userRouter from './domains/user/user.router';
// Importando enrutador proyects
import projectsRouter from './domains/projects/proyectos.router'

// Función que agrega rutas
const addRoutes = (app) => {
  // Agregando enrutado de Home
  app.use('/', homeRouter);
  // Agregar el enrutado de user
  app.use('/user', userRouter);
  return app;
};

// Exportando objeto
export default { addRoutes };
