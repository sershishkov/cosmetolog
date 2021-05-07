import mongoose from 'mongoose';
import { mongooseSettings } from '../../../../dataBase/db';
// import connectDB from '../../../../dataBase/db';
// import withProtect from '../../../../../middleware/withProtect';
// import withRoles from '../../../../../middleware/withRoles';

import Model__KeyWord from '../../../../dataBase/Models/Model__KeyWord';

const handler = async (req, res) => {
  let mongooseConnection;
  try {
    mongooseConnection = await mongoose.connect(
      process.env.DATABASE_URL,
      mongooseSettings
    );
  } catch (error) {
    res.status(500).json({ message: 'Could not connect to database' });
    return;
  }

  const { method } = req;

  switch (method) {
    /////////////////POST/////////////////////////////////
    case 'POST': {
      const { keyWord_text } = req.body;
      if (!keyWord_text || keyWord_text.trim() === '') {
        res.status(400).json({
          success: false,
          message: 'Please enter data.',
        });
        return;
      }

      try {
        const new__KeyWord = new Model__KeyWord({
          keyWord_text,
        });

        await new__KeyWord.save();

        await mongooseConnection.disconnect();

        res.status(200).json({
          success: true,
          data: new__KeyWord,
        });
      } catch (error) {
        await mongooseConnection.disconnect();
        res.status(500).json(error.message);
        return;
      }
    }
    case 'GET': {
      /////////////////GET_ALL/////////////////////////////////

      try {
        const all__KeyWords = await Model__KeyWord.find().sort({
          keyWord_text: 1,
        });

        if (!all__KeyWords) {
          res.status(400).json({
            success: false,
            message: 'Data not found',
          });
          return;
        }

        await mongooseConnection.disconnect();
        res.status(200).json({
          success: true,
          data: all__KeyWords,
        });
      } catch (error) {
        await mongooseConnection.disconnect();
        res.status(500).json(error.message);
        return;
      }
    }
    default:
      return;
  }
};

// export default withProtect(withRoles(handler));
// export default connectDB(handler);
export default handler;
