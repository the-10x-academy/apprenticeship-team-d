const express = require("express");
const router = express.Router();
const mongo = require("./mongo");
const post_schema = require("./models/post");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

/* read list of post from db */
router.get("/postobjs", async (req, res) => {
	/* api to fetch list of posts */
	const posts = await post_schema.find({});
	res.send(posts);
});
module.exports = router;
