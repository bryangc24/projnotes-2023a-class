import createError from 'http-errors';
// import the Express Library
import express from 'express';
// Is a Core-Node library to manage system paths
import path from 'path';
// helps to parse client cookies
import cookieParser from 'cookie-parser';
// library to log http commuication
import morgan from 'morgan';
// importing routes
import indexRouter from '@server/routes/index';
import usersRouter from '@server/routes/users';
import apiRouter from '@server/routes/api';

// setting webpack modules
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';

// importing webpack configuration
import WebpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.dev.config';

// Importando el configurador de motor del motor plantillas
import configTemplateEngine from './config/templateEngine';

// we are creating the express instance
const app = express();

// get the execution node
const nodeEnviroment = process.env.NODE_ENV || 'production';

// deciding if we add webpack middleware or not
if (nodeEnviroment === 'development') {
  // Start webpack dev server
  console.log('🏆Ejecutando modo desarrollo');
  // Adding the key "mode" with its value develoment
  webpackConfig.mode = nodeEnviroment;
  // Setting the port
  webpackConfig.devServer.port = process.env.port;
  // setting up the HMR (Hot module replacement)
  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true$timeout=1000',
    webpackConfig.entry,
  ];
  // creating the bundler
  const bundle = webpack(webpackConfig);
  // Enabling the webpack middleware
  app.use(
    WebpackDevMiddleware(bundle, {
      publicPath: webpackConfig.output.publicPath,
    }),
  );
  // enabling the webpack hot HMR
  app.use(WebpackHotMiddleware(bundle));
} else {
  console.log('🧧 Ejecutando en modo produccion🧧');
}

// view engine setup
configTemplateEngine(app);

// que es app es una instancia de express
// Register midleware
// app.use ((req,res,next) => {
// console.log("✌ se ha recivido una peticion");
// next();
// });
// app.use((req,res,next)=>{
//   console.log(`🙌 IP: ${req.ip}`);
//   next();
// });
// Log all received requests
app.use(morgan('dev'));
// Parse request data into json
app.use(express.json());
// Decode url info
app.use(express.urlencoded({ extended: false }));
// Parse client cookies into json
app.use(cookieParser());
// Set up the static file server
app.use(express.static(path.join(__dirname, '../public')));
// registering routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
