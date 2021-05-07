import mongoose from 'mongoose';

const Model__Comment = new mongoose.Schema({
  commentText: {
    type: String,
  },
  commentAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  },
});

export default mongoose.model('Comment', Model__Comment);
