const router = require('express').Router();
const apiRoutes = require('./api');
// const calendar = require('../controllers/calendar');

// console.log(calendar);

// API Routes
router.use('/api/v1', apiRoutes);

router.get('/trips', function(){
    console.log("working")
});


module.exports = router;