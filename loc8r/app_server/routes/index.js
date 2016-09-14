var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var ctrlPizza = require('../controllers/pizza');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
/* Pizza */
router.get('/pizza', ctrlPizza.pizzaList);
router.get('/pizza/place', ctrlPizza.pizzaInfo);
router.get('/pizza/place/review/new', ctrlPizza.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
