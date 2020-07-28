const express = require('express');
const router = express.Router();

// @route    GET api/index
// @desc     Ping API (Test endpoint)
// @access   Public
router.get("/", (request, response) => {
    response.status(200).json({ msg: "You have successfully pinged this API." });
});


module.exports = router;