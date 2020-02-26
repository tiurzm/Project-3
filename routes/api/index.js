const router = require("express").Router();
const calendarRoutes = require("./calendar")
const userRoutes = require("./users")

router.use('/calendar', calendarRoutes)
router.use('/users', userRoutes)

module.exports = router;
