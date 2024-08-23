const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// const API_KEY = "b9299832b91e04679459c46554114658";

// if (!API_KEY) {
//     console.error('Missing API Key');
//     return res.status(500).json({ message: 'Server configuration error: Missing API Key' });
//   }

app.get('/api/weather/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9299832b91e04679459c46554114658&units=metric`
    );
    // const response = await axios.get(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
    // );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'City not found' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
