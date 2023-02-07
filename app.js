
const express = require("express");

const app = express();


app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(
    express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

// Routes
app.use(require('./routes'));

// Invalid request handler
app.use('*', (req, res) => {
    res.json({
        message: `INVALID REQUEST AT: ${req.originalUrl}`
    })
})

module.exports = app