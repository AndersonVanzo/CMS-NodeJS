import express from 'express';
import controller from '../controllers/websiteController.js';
const router = express.Router();

router.route('/')
  .get(controller.index)
  .post(controller.internal);

export default router;