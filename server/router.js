// Importando enrutador home
import homeRouter from './domains/home/home.router';
// Importando enrutador user
import userRouter from './domains/user/user.router';
// Imporntado enrutador project
import projectRouter from './domains/project/project.router';
// Función que agrega rutas
const addRoutes = (app) => {
  // Agregando enrutado de Home
  app.use('/', homeRouter);
  // Agregar el enrutado de user
  app.use('/user', userRouter);
  // Agregar el enrutado de user
  app.use('/project', projectRouter);
  return app;
};

// Exportando objeto
export default { addRoutes };
