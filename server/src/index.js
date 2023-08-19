import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import eventsRouter from './routes/events.js';
import resourcesRouter from './routes/resources.js';

// set up express and middleware
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/events", eventsRouter);
app.use("/resources", resourcesRouter);

// connect to mongodb
mongoose.connect(process.env.URI);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));