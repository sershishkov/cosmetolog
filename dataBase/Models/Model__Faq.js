import mongoose from 'mongoose';

// import KeyWord from './Model__KeyWord';

const Model__Faq = new mongoose.Schema({
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
  keyWords: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'KeyWord',
    },
  ],
  questionText: {
    type: String,
  },
  answerText: {
    type: String,
  },
});

let Export__Faq;

if (mongoose.models.Faq) {
  Export__Faq = mongoose.model('Faq');
} else {
  Export__Faq = mongoose.model('Faq', Model__Faq);
}

export default Export__Faq;
