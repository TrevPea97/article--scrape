// clear in routes-api
// ===================

var router = require("express").Router();
var clearDoAll = require("../../controllers/clear");

router.get("/", clearDoAll.clearDB);

module.exports = router;

