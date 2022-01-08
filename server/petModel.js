const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    categories: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    img: { type: String, required: true },
    size: { type: String, required: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model('pet', petSchema);
