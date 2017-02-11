import express from 'express';
import Home from './controller/home';
import List from './api/list';
import Article from './api/article';

const router = express.Router();  
const home = new Home();

const list = new List();
const article = new Article();

router.get('/web/*',home.get);

router.get('/api/list.json',list.get);

router.post('/api/article.json',article.post);
router.get('/api/article.json',article.get);


module.exports = router;
