import { engine as exphbs } from 'express-handlebars';
import path from 'path';
// crear una funcion de configuracion
// que exprtaremos por defecto
export default (app) => {
  // compatible con consolidatejs
  app.engine(
    'hbs',
    exphbs({
      extname: '.hbs',
      defaultLayout: 'main',
    }),
  );

  // Selecionando el motor de plantillas que integramos
  // Anteriormente
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '..', 'views'));

  return app;
};
