// headlines in routes-api
// =======================

var router = require("express").Router();
var headlineDoAll = require("../../controllers/headline");

router.get("/", headlineDoAll.findAll);
router.delete("/:id", headlineDoAll.delete);
router.put("/:id", headlineDoAll.update);

module.exports = router;
