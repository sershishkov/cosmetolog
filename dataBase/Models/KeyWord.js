import mongoose from 'mongoose';

const KeyWordSchema = new mongoose.Schema({
  keyWord: {
    type: String,
  },
});

export default mongoose.model('KeyWord', KeyWordSchema);
