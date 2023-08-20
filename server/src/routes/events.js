import express from 'express';
import EventModel from '../models/Events.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await EventModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

export default router;