import express from 'express';
import ResourceModel from '../models/Resources.js';
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await ResourceModel.find({});
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

export default router;