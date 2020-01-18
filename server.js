'use strict';

// Environment variables
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Application setup
const PORT = process.env.PORT;
const app = express();
app.use(cors());

// Routes
app.get('/', (request, response) => {
  response.send('Home Page');
})

app.get('/location', (request, response) => {
  try{
    const geoData = require('./data/geo.json');
    const city = request.query.city;
    const locationData = new Location(city, geoData);
    response.send(locationData);
  }
  catch(error){
    errorHandler('So sorry, something went wrong.', request, response);
  }
})

// app.get('/weather', (request, response) => {
//     try{
//         const geoData = require('./data/geo.json');
//         const city = request.query.city;
//         console.log(request.query);
//         const locationData = new Location(city, geoData);
//         response.send(locationData);
//     }
//     catch(error){
//         errorHandler('So sorry, something went wrong.', request, response);
//     }
// })


// Server Listener
app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
