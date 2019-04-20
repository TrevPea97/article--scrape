// fetch in routes-api
// ===================

var router = require("express").Router();
var fetchDoAll = require("../../controllers/fetch");

router.get("/", fetchDoAll.scrapeHeadlines);

module.exports = router;
