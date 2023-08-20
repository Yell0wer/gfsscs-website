import express from 'express';
import CategoryModel from '../models/Categories.js';
const router = express.Router();

router.get('/:type', async (req, res) => {
  try {
    const response = await CategoryModel.find({ name: req.params.type });
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

export default router;