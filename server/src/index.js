import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// set up express and middleware
const app = express();
app.use(express.json());
app.use(cors());

// connect to mongodb
const uri = "mongodb+srv://gfsscs:asdfghjkl0@website.rgbpelv.mongodb.net/Website?retryWrites=true&w=majority";
mongoose.connect(uri);

app.listen(8080, () => console.log("server running"));