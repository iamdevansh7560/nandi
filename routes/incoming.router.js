const express = require("express");
const router = express.Router();
const { incomingHandler } = require('../controllers/incoming.controller');

router.route('/')
    .post( incomingHandler
    )

module.exports = router;