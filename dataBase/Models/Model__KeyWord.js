import mongoose from 'mongoose';

const Model__KeyWord = new mongoose.Schema({
  keyWord_text: {
    type: String,
  },
});

module.exports = mongoose.model('KeyWord', Model__KeyWord);
