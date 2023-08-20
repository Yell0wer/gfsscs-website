import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: String,
  categories: Object
});

export default mongoose.model('categories', CategorySchema);