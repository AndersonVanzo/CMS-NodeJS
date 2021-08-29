import express from 'express';
const router = express.Router();

router.use('/', (req, res) => {
  res.render('index');
});

export default router;