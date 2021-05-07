// import withProtect from '../../../../../middleware/withProtect';
// import withRoles from '../../../../../middleware/withRoles';

import connectDB from '../../../../../dataBase/db';
import Model__KeyWord from '../../../../../dataBase/Models/Model__KeyWord';

connectDB();

const handler = async (req, res) => {
  /////////////////GET_ONE/////////////////////////////////

  if (req.method === 'GET') {
    if (!req.query) {
      return res.status(400).json({
        success: false,
        message: 'Please enter id.',
      });
    }

    const { id } = req.query;

    if (id) {
      try {
        const one__KeyWord = await Model__KeyWord.findById(id);
        if (!one__KeyWord) {
          return res.status(400).json({
            success: false,
            message: 'This data does not exist',
          });
        }

        return res.status(200).json({
          success: true,
          data: one__KeyWord,
        });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }

  /////////////////DELETE_ONE/////////////////////////////////

  if (req.method === 'DELETE') {
    if (!req.query) {
      return res.status(400).json({
        success: false,
        message: 'Please enter id.',
      });
    }

    const { id } = req.query;

    if (id) {
      try {
        const one__KeyWord = await Model__KeyWord.findByIdAndDelete(id);
        if (!one__KeyWord) {
          return res.status(400).json({
            success: false,
            message: 'No object with the given id',
          });
        }

        return res.status(200).json({
          success: true,
          data: {},
        });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

// export default connectDB(withProtect(withRoles(handler)));
export default handler;
