import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
  keyWords: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'KeyWords',
  },
  questionText: {
    type: String,
  },
  answerText: {
    type: String,
  },
});

export default mongoose.model('Review', ReviewSchema);
