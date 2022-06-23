const express = require('express');
const placesControllers = require('../controllers/places-controller');

const router = express.Router();


// Get Routes
router.get('/:pid', placesControllers.getPlaceById);
router.get('/user/:uid', placesControllers.getPlacesByUserId);

// Post Routes
router.post('/', placesControllers.createPlace);

// Patch/Update Routes
router.patch('/:pid', placesControllers.updatePlace);

// Delete Routes
router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
