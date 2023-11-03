const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const notesRoutes = require("./notesRoutes");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/notes", notesRoutes);

module.exports = router;
