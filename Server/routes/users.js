import express from 'express';
const { Router } = express;

const router = Router();
/* GET users listing. */
//Quitamos la palabra function sustitullendo por la flecha =>
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

export default router;
