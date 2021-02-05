const mongoose = require("mongoose");

const post_schema = mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", post_schema);
