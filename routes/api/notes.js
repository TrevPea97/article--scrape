// notes in routes-api
// ===================

var router = require("express").Router();
var noteAll = require("../../controllers/note");

router.get("/:id", noteAll.find);
router.post("/", noteAll.create);
router.delete("/:id", noteAll.delete);

module.exports = router;
