import mongoose from 'mongoose';
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const Model__User = new mongoose.Schema({
  firstName: {
    type: String,
    // required: [true, 'Please add a name'],
  },
  patronymic: {
    type: String,
  },
  lastName: {
    type: String,
  },
  telNumber: {
    type: String,
  },
  dateBirth: {
    type: Date,
  },
  email: {
    type: String,
    // required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  role: {
    type: String,
    enum: ['user', 'client', 'boss', 'admin'],
    default: 'user',
  },
  myAvatar: {
    type: String,
    // required: true,
    default: '/images/uploads/default_user.jpg',
  },
  password: {
    type: String,
    // required: [true, 'Please add a password'],
    minlength: 6,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// //Encrypt password using bcrypt
// Model__User.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// //Sign JWT and return
// Model__User.methods.getSignedJwtToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };

// //Match user entered password to hashed password in database
// Model__User.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

export default mongoose.model('User', Model__User);
