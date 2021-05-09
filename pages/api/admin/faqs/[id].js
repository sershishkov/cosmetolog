import connectDB from '../../../../dataBase/db';

// import withProtect from '../../../../../middleware/withProtect';
// import withRoles from '../../../../../middleware/withRoles';

import Model__Faq from '../../../../dataBase/Models/Model__Faq';

const handler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;

  if (method === 'PUT') {
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
      answerText.trim() === '' ||
      !id
    ) {
      res.status(400).json({
        success: false,
        message: 'Please enter data.',
      });
      return;
    }

    const new__Faq = {
      metaTitle,
      metaDescription,
      keyWords,
      questionText,
      answerText,
    };

    try {
      const updated__Faq = await Model__Faq.findByIdAndUpdate(id, new__Faq, {
        new: true,
        runValidators: true,
      });

      res.status(200).json({
        success: true,
        data: updated__Faq,
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
      const one__Faq = await Model__Faq.findById(id);
      if (!one__Faq) {
        res.status(400).json({
          success: false,
          message: 'No object with the given id',
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: one__Faq,
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
      const one__Faq = await Model__Faq.findByIdAndDelete(id);
      if (!one__Faq) {
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
