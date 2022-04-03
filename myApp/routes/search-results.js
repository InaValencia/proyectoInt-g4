const express = require('express');
const router = express.Router();
const searchResultsController = require('../controllers/search-resultsControllers');



router.get('/search-results', searchResultsController.showSearchResults);






module.exports = router;

