const express = require('express');
const router = express.Router
const searchResultsController = require('../controllers/searchResultsControllers');



router.get('/search-results', searchResultsController);






module.exports = router;

