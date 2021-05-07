// import mongoose from 'mongoose';

// const connectDB = async () => {
//   const conn = await mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   });

//   console.log(`MongoDB Connected: ${conn.connection.host}`);
// };

// const connectDB = (handler) => async (req, res) => {
//   try {
//     if (mongoose.connections[0].readyState) {
//       // Use current db connection
//       console.log(`MongoDB Connected`);
//       return handler(req, res);
//     }
//   } catch (error) {
//     console.log(error.message);
//     return;
//     // res.status(500).json({ message: 'Could not connect to database' });
//   }

//   // Use new db connection
//   try {
//     await mongoose.connect(process.env.DATABASE_URL, {
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//       useNewUrlParser: true,
//     });
//     console.log(`MongoDB Connected`);
//     return handler(req, res);
//   } catch (error) {
//     console.log(error.message);
//     return;
//     // res.status(500).json({ message: 'Could not connect to database' });
//   }
// };

// export default connectDB;

export const mongooseSettings = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
