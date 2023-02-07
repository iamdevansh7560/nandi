const express = require("express");
const router = express.Router();
const { sendMessage } = require('../controllers/twilio.controller');

router.route('/whatsapp')
    .post( sendMessage
    )

module.exports = router;