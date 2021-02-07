const express = require("express");
const router = express.Router();
const mongo = require("./mongo");
const imageSchema = require("./models/image");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

/* read list of post from db */
router.get("/postobjs", async (req, res) => {
	/* api to fetch list of posts */
	const posts = await imageSchema.find({});
	res.send(posts);
});
module.exports = router;
