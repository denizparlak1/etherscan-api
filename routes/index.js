const express = require('express');
const {fetchData} = require("../controller/etherscanController");
const router = express.Router();


router.get('/fetch-data', fetchData);

module.exports = router;
