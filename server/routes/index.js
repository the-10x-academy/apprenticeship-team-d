const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const cors = require("cors");
const imgModel = require("../models/image");

const app = express();
const mongo = require("../mongo");

require("../service/image");

app.use(cors());

const multer = require("multer");
const { postImage } = require("../service/image");
const { getImage } = require("../service/image");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + "-" + Date.now());
	},
});

const upload = multer({ storage: storage });

//post api task
router.post("/posts", (req, res) => {
	console.log(req.body);
	const author = new Post({
		Author_name: req.body.author,
		Location: req.body.loc,
	});
	author.save((err, doc) => {
		if (err) console.log(err);
		console.log(doc);
	});
	res.redirect("/posts");
});

// router.get("/posts", get_posts);

// router.get("/posts", async (req, res) => {
// 	const posts = await Post.find({});
// 	res.send(posts);
// });

router.get("/", getImage);

router.post("/", upload.single("image"), postImage);

// receives the id and increments the likes of that post
router.post("/:id", (req, res) => {
	console.log(req.body);
	console.log("put");
	imgModel.findOneAndUpdate(
		{ _id: req.params.id },
		{ $inc: { likes: 1 } },
		null,
		function (err, docs) {
			if (err) {
				console.log(err);
			} else {
				console.log("liked");
			}
		},
	);
});

module.exports = router;
