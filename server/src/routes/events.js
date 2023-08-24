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

router.post('/:pw', async(req, res) => {
  if(req.params.pw != process.env.pw) {
    res.status(404).send('Not found');
  } else {
    try {
      const event = new EventModel(req.body);
      event.save().then(resource => {
        res.status(200).send('POST successful');
      });
    } catch (err) {
      res.json(err);
    }
  }
});

router.delete('/:id/:pw', async(req, res) => {
  if(req.params.pw != process.env.pw) {
    res.status(404).send('Not found');
  } else {
    try {
      await EventModel.deleteOne({ _id: req.params.id });
      res.status(200).send('DELETE successful');
    } catch (err) {
      res.json(err);
    }
  }
});

export default router;