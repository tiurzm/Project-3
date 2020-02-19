const router = require("express").Router();
const calendarRoutes = require("./calendar")

router.use('/calendar', calendarRoutes)

module.exports = router;
