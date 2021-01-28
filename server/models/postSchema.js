const mongoose = require("mongoose");

const post_schema = mongoose.Schema({
	Name: { type: String },
	place: { type: String },
	image: { type: String },
	likes: { type: Number },
	heading: { type: String },
	date: { type: Date },
});

module.exports = mongoose.model("posts", post_schema);
