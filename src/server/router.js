import express from 'express';

import Login from './api/login';
import Article from './api/article';

import { web } from './web';

const router = express.Router();
let login = new Login();
let article = new Article();

console.log("router:",router);

//页面级验证及其响应
router.get('/web/*',web);

//接口级验证及响应
// router.post('/api/login',login.post);
// router.get('/api/backend',article.getOne);
// router.post('/api/backend',article.post);
// router.get('/api/list',article.getAll);
// router.get('/api/detail/:id',article.getOne);

module.exports = router;
