const express = require('express');
const placesControllers = require('../controllers/places-controller');

const router = express.Router();


// Get Routes
router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlaceByUserId);

// Post Routes
router.post('/', placesControllers.createPlace);

module.exports = router;
