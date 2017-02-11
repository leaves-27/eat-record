import path from 'path';
import fs from 'fs';
import Express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import sesstion from 'express-session';
import connectMongo  from 'connect-mongo';
import flash from 'connect-flash';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';


import router from './router';
import settings from './settings';

const accessLog = fs.createWriteStream('access.log',{flags:"a"});
const errorLog = fs.createWriteStream('error.log',{flags:"a"});
const MongoStore = connectMongo(sesstion);
const app = Express();
const port = 3000;
const viewPath = path.join(__dirname,'views');


app.set('views',viewPath);
app.set('view engine','ejs');

// app.use(logger('dev'));
// app.use(logger({stream : accessLog}));
app.use(function(err,req,res,next){
  var meta = '[' + new Date() + ']' + req.url + '\n';
  errorLog.write(meta + err.stack +'\n');
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(sesstion({
  saveUninitialized : false,
  resave : true,
  secret : settings.cookieSecret,
  key : settings.db,
  cookie : { 
    maxAge:1000*60*60*24*30
  },
  store : new MongoStore({
    db:settings.db,
    host:settings.host,
    port:settings.port
  })
}));
app.use(flash());

app.use('/static',Express.static(path.join("", 'build/static')));
app.use('/',router);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error',{
    message: err.message,
    error: {}
  });
});

app.listen(port);