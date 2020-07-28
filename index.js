const express = require('express');
const config = require('config');   // Config JSON file located at ./config/default.json.


const app = express();  // Initialize express.

// Initalize middlewares.
app.use(express.json()); // Express body parser.
app.use(require('./middleware/logger')); // Logger.

// API Routes
app.use("/api/", require('./routes/api/index')); // Test API.


// Start listening.
const PORT = process.env.PORT || config.get('Server.port');
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});