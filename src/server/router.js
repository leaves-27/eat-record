import express from 'express';

import { loginGet } from './controller/login';
import { backendGet } from './controller/backend';
import { listGet } from './controller/list';
import { detailGet } from './controller/detail';

import { validationPage } from './middleware/validation';
import { validationApi } from './api/validation';

import Backend from './api/backend';
import Login from './api/login';
import * as asyncAction from '../common/actions/async';
// import { render } from './render';

const router = express.Router();

let backend = new Backend();
let login = new Login();

//页面级验证及其响应
router.get('/web/login',loginGet);

router.get('/web/backend',validationPage);
router.get('/web/backend',backendGet);

router.get('/web/',listGet);
router.get('/web/detail:id',detailGet);

//接口级验证及响应
router.post('/api/login',login.post);

router.get('/api/backend',validationApi);
router.get('/api/backend',backend.get);
router.post('/api/backend',validationApi);
router.post('/api/backend',backend.post);



// router.get('/web/list',validate.page);


// router.get('/web/detail:id',validate.page);


module.exports = router;
