var mongoose = require("mongoose");

var imageSchema = new mongoose.Schema({
  name: String,
  place: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("Image", imageSchema);
