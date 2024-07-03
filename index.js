const express = require('express');
const axios = require('axios');
const cron = require('node-cron');

const app = express();

app.get('/', (req, res) => res.send('Success'));

// Keep master awake
cron.schedule('*/60 * * * * *', () => axios.get(process.env.MASTER_HOST));

app.listen(process.env.PORT || 3001, () => console.log('Listening on port', process.env.PORT || 3001));
