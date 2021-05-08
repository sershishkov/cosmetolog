import mongoose from 'mongoose';

const connectDB = (handler) => async (req, res) => {
  try {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      // console.log(`MongoDB Connected second time`);
      return handler(req, res);
    }
  } catch (error) {
    console.log(error.message);
    return;
  }

  // Use new db connection
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    // console.log(`MongoDB Connected first time`);
    return handler(req, res);
  } catch (error) {
    console.log(error.message);
    return;
  }
};

export default connectDB;
