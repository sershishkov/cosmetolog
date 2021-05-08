import connectDB from '../../../../dataBase/db';
// import withProtect from '../../../../../middleware/withProtect';
// import withRoles from '../../../../../middleware/withRoles';

import Model__KeyWord from '../../../../dataBase/Models/Model__KeyWord';

const handler = async (req, res) => {
  const { method } = req;

  /////////////////POST/////////////////////////////////
  if (method === 'POST') {
    const { keyWord_text } = req.body;
    if (!keyWord_text || keyWord_text.trim() === '') {
      res.status(422).json({
        success: false,
        message: 'Invalid input',
      });
      return;
    }

    try {
      const new__KeyWord = new Model__KeyWord({
        keyWord_text,
      });

      await new__KeyWord.save();

      res.status(201).json({
        success: true,
        data: new__KeyWord,
      });
    } catch (error) {
      res.status(500).json(error.message);
      return;
    }
  }

  if (method === 'GET') {
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

      res.status(200).json({
        success: true,
        data: all__KeyWords,
      });
    } catch (error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

// export default withProtect(withRoles(handler));
export default connectDB(handler);
