const express = require('express');
const bodyParser = require('body-parser');
const placesRoutes = require('./routes/places-routes');

const app = express();

// Routes
app.use(placesRoutes);

app.listen(5000)
