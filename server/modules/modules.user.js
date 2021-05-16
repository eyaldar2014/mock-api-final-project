const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  password: {
    type: Number,
    required: true
  },
  // this.validate
});

const User = mongoose.model('User', userSchema);


module.exports = User

// var schema = new Schema(
//   {
//     name: String,
//     binary: Buffer,
//     living: Boolean,
//     updated: { type: Date, default: Date.now() },
//     age: { type: Number, min: 18, max: 65, required: true },
//     mixed: Schema.Types.Mixed,
//     _someId: Schema.Types.ObjectId,
//     array: [],
//     ofString: [String], // You can also have an array of each of the other types too.
//     nested: { stuff: { type: String, lowercase: true, trim: true } }
//   })