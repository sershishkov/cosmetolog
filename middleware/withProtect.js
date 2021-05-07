import jwt from 'jsonwebtoken';
import Model__User from '../dataBase/Models/Model__User';

const withProtect = (handler) => {
  return async (req, res) => {
    // Get token and check if it exists
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      //Set token from Bearer token in header
      token = req.headers.authorization.split(' ')[1];
    }

    // if (req.cookies && req.cookies.st_accessToken) {
    //   token = req.cookies.st_accessToken;
    // }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Please log in to get access.',
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check if user exists with refresh token
      const currentUser = await Model__User.findById(decoded.id);
      if (!currentUser) {
        return res.status(401).json({
          success: false,
          message: 'The user belonging to this token no longer exist.',
        });
      }

      // Grant access to protected route
      req.user = currentUser;

      return handler(req, res);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Please log in to get access.',
      });
    }
  };
};

export default withProtect;
