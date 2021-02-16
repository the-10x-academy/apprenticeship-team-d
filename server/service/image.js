const imgModel = require("../models/image");
const fs = require("fs");
const path = require("path");

module.exports = {
	getImage: (req, res) => {
		imgModel.find({}, (err, items) => {
			if (err) {
				console.log(err);
				res.status(500).send("An error occurred", err);
			} else {
				res.render("imagesPage", { items: items });
			}
		});
	},
	postImage: (req, res, next) => {
		var obj = {
			name: req.body.name,
			desc: req.body.desc,
			place: req.body.place,
			likes: 0,
			img: {
				data: fs.readFileSync(
					path.join(__dirname + "./../uploads/" + req.file.filename),
				),
				contentType: "image/png",
			},
		};
		imgModel.create(obj, (err, item) => {
			if (err) {
				console.log(err);
			} else {
				// item.save();
				res.redirect("/");
			}
		});
	},
};
