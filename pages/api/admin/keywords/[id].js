import connectDB from '../../../../dataBase/db';

// import withProtect from '../../../../../middleware/withProtect';
// import withRoles from '../../../../../middleware/withRoles';

import Model__KeyWord from '../../../../dataBase/Models/Model__KeyWord';

const handler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;

  if (method === 'PUT') {
    const { keyWord_text } = req.body;

    if (!keyWord_text || keyWord_text.trim() === '' || !id) {
      res.status(400).json({
        success: false,
        message: 'Please enter data.',
      });
      return;
    }

    const new__KeyWord = {
      keyWord_text,
    };

    try {
      const updated__KeyWord = await Model__KeyWord.findByIdAndUpdate(
        id,
        new__KeyWord,
        {
          new: true,
          runValidators: true,
        }
      );

      res.status(200).json({
        success: true,
        data: updated__KeyWord,
      });
    } catch (error) {
      res.status(500).json(error.message);
      return;
    }
  }
  if (method === 'GET') {
    if (!id) {
      res.status(400).json({
        success: false,
        message: 'Please enter id.',
      });
      return;
    }

    try {
      const one__KeyWord = await Model__KeyWord.findById(id);
      if (!one__KeyWord) {
        res.status(400).json({
          success: false,
          message: 'No object with the given id',
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: one__KeyWord,
      });
    } catch (error) {
      res.status(500).json(error.message);
      return;
    }
  }
  if (method === 'DELETE') {
    if (!id) {
      res.status(400).json({
        success: false,
        message: 'Please enter id.',
      });
      return;
    }

    try {
      const one__KeyWord = await Model__KeyWord.findByIdAndDelete(id);
      if (!one__KeyWord) {
        res.status(400).json({
          success: false,
          message: 'No object with the given id',
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: {},
      });
    } catch (error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

// export default withProtect(withRoles(handler));
export default connectDB(handler);
// export default handler;
