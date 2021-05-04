import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  reviewText: {
    type: String,
  },
  reviewAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('Review', ReviewSchema);
