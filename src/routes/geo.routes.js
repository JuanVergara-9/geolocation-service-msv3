const router=require('express').Router();
const ctrl=require('../controllers/geo.controller');

router.get('/cities', ctrl.listCities);
router.get('/cities/:slug', ctrl.getCityCenter);
router.get('/reverse', ctrl.reverseGeocode);

module.exports = router;
