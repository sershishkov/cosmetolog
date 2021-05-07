import mongoose from 'mongoose';

const Model__Review = new mongoose.Schema({
  reviewText: {
    type: String,
  },
  reviewAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('Review', Model__Review);
