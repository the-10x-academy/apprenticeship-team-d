const express = require("express");
const router = express.Router();
const mongo = require("./mongo");
const postSchema = require("./models/postSchema");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/posts", async (req, res) => {
	const posts = await postSchema.find({});
	res.send(posts);
});

module.exports = router;
