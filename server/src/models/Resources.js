import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: Number, required: false }
});

export default mongoose.model("resources", ResourceSchema);