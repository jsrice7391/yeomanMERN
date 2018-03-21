const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors');
module.exports.redisClient = require("redis").createClient(process.env.REDISCLOUD_URL, "", {
  no_ready_check: true
});
const logger = require('morgan')

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

//Cross-origin resource sharing from client to server -- needed for auth
app.use(cors());

// Add routes, both API and view
app.use(routes);

module.exports.app = app;


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chedah", {
  useMongoClient: true
});

// debugging logger
app.all('*', (req, res, next) => {
  console.log(`# requesting url: ${req.url}`)
  next()
});


// Start the API server
app.listen(PORT, function () {
  console.log(`🧀  ==> API Server now listening on PORT ${PORT}!`);
});



