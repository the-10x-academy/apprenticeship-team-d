const express = require("express");
const router = express.Router();
const mongo = require("../mongo");
const postSchema = require("../models/postSchema")


/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

/* read list of post from db */
router.get("/posts", async (req, res) => {
	
/* api to fetch list of posts */
	const posts = await postSchema.find({});
	res.send(posts);
});
module.exports = router;
