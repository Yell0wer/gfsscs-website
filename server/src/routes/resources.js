import express from 'express';
import ResourceModel from '../models/Resources.js';
const router = express.Router();

router.get("/:category", async (req, res) => {
    try {
        const response = await ResourceModel.find({ category: req.params.category });
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

export default router;