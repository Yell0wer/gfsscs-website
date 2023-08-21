import express from 'express';
import ResourceModel from '../models/Resources.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await ResourceModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.post('/', async(req, res) => {
  try {
    const resource = new ResourceModel(req.body);
    resource.save().then(resource => {
      res.status(200).send('POST successful');
    });
  } catch (err) {
    res.status(400).send('POST failed');
  }
});

router.delete('/:id', async(req, res) => {
  try {
    await ResourceModel.deleteOne({ _id: req.params.id });
    res.status(200).send('DELETE successful');
  } catch (err) {
    res.json(err);
  }
});


export default router;