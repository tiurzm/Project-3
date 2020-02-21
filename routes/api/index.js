const router = require("express").Router();
const calendarRoutes = require("./calendar")
const tripRoutes = require("./trips")

router.use('/calendar', calendarRoutes)

module.exports = router;
