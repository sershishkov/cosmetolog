// import withProtect from '../../../../../middleware/withProtect';
// import withRoles from '../../../../../middleware/withRoles';

import connectDB from '../../../../../dataBase/db';
import Model__KeyWord from '../../../../../dataBase/Models/Model__KeyWord';

connectDB();
const handler = async (req, res) => {
  /////////////////POST/////////////////////////////////
  if (req.method === 'POST') {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: 'Please enter data.',
      });
    }

    const { keyWord_text } = req.body;

    if (keyWord_text) {
      try {
        const new__KeyWord = new Model__KeyWord({
          keyWord_text,
        });

        await new__KeyWord.save();
        return res.status(200).json({
          success: true,
          data: new__KeyWord,
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
  /////////////////PUT/////////////////////////////////
  if (req.method === 'PUT') {
    if (!req.body || !req.query) {
      return res.status(400).json({
        success: false,
        message: 'Please enter data.',
      });
    }

    const { id } = req.query;
    const { keyWord_text } = req.body;

    if (keyWord_text && id) {
      try {
        const new__KeyWord = new Model__KeyWord({
          keyWord_text,
        });

        const updated__KeyWord = await Model__KeyWord.findByIdAndUpdate(
          id,
          new__KeyWord,
          {
            new: true,
            runValidators: true,
          }
        );
        return res.status(200).json({
          success: true,
          data: updated__KeyWord,
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

  /////////////////GET_ALL/////////////////////////////////
  if (req.method === 'GET') {
    try {
      const all__KeyWords = await Model__Unit.find().sort({
        name__Unit: 1,
      });

      if (!all__KeyWords) {
        return res.status(400).json({
          success: false,
          message: 'Data not found',
        });
      }
      return res.status(200).json({
        success: true,
        data: updated__KeyWord,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

// export default connectDB(withProtect(withRoles(handler)));
export default handler;
