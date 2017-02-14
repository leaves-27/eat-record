import express from 'express';
import Home from './controller/home';
import List from './api/list';
import Article from './api/article';
import Login from './api/login';

const router = express.Router();

const home = new Home();
router.get('/web/*',home.get);

const list = new List();
router.get('/api/list.json',list.get);


const login = new Login();
router.post('/api/login.json',login.post);
router.post('/api/validation.json',login.validate);

const article = new Article();
router.post('/api/article.json',article.post);
router.get('/api/article.json',article.get);




module.exports = router;
