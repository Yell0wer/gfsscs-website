import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  description: String,
  type: String
});

export default mongoose.model('events', EventSchema);