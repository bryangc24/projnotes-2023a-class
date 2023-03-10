import createError from 'http-errors'
// import the Express Library
import express from 'express';
// Is a Core-Node library to manage system paths
import path from 'path'
// helps to parse client cookies
import cookieParser from 'cookie-parser';
//library to log http commuication
import logger from 'morgan'
//importing routes
import indexRouter from '@server/routes/index' 
import usersRouter from '@server/routes/users';
import apiRouter from '@server/routes/api';
// we are creating the express instance
const app = express();

// view engine setup
//we are declaring the localization of the views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//que es app es una instancia de express
//Register midleware
// app.use ((req,res,next) => {
// console.log("✌ se ha recivido una peticion");
// next();
// });
// app.use((req,res,next)=>{
//   console.log(`🙌 IP: ${req.ip}`);
//   next();
// }); 
//Log all received requests
app.use(logger('dev'));
// Parse request data into json
app.use(express.json());
// Decode url info
app.use(express.urlencoded({ extended: false }));
//Parse client cookies into json
app.use(cookieParser());
// Set up the static file server
app.use(express.static(path.join(__dirname, 'public')));
//registering routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) =>{
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
