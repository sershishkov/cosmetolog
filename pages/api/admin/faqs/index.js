import connectDB from '../../../../dataBase/db';
// import withProtect from '../../../../../middleware/withProtect';
// import withRoles from '../../../../../middleware/withRoles';

import Model__Faq from '../../../../dataBase/Models/Model__Faq';
import Model__KeyWord from '../../../../dataBase/Models/Model__KeyWord';

const handler = async (req, res) => {
  const { method } = req;

  /////////////////POST/////////////////////////////////
  if (method === 'POST') {
    const {
      metaTitle,
      metaDescription,
      keyWords,
      questionText,
      answerText,
    } = req.body;
    if (
      !metaTitle ||
      !metaDescription ||
      !keyWords ||
      !questionText ||
      !answerText ||
      metaTitle.trim() === '' ||
      metaDescription.trim() === '' ||
      keyWords.length === 0 ||
      questionText.trim() === '' ||
      answerText.trim() === ''
    ) {
      res.status(422).json({
        success: false,
        message: 'Invalid input',
      });
      return;
    }

    try {
      const new__Faq = new Model__Faq({
        metaTitle,
        metaDescription,
        keyWords,
        questionText,
        answerText,
      });

      await new__Faq.save();

      res.status(201).json({
        success: true,
        data: new__Faq,
      });
    } catch (error) {
      res.status(500).json(error.message);
      return;
    }
  }

  if (method === 'GET') {
    /////////////////GET_ALL/////////////////////////////////

    try {
      const all__Faqs = await Model__Faq.find()
        .populate({
          path: 'keyWords',
          select: 'keyWord_text',
          model: Model__KeyWord,
        })
        // .populate({ path: 'keyWords.keyWord_text' })
        .populate('keyWords')
        .sort({
          questionText: 1,
        });
      // .exec();

      if (!all__Faqs) {
        res.status(400).json({
          success: false,
          message: 'Data not found',
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: all__Faqs,
      });
    } catch (error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

// export default withProtect(withRoles(handler));
export default connectDB(handler);
