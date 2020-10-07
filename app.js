const express = require('express');
const router = require('./Routes/routes');

const port = 2020;
const host = 'localhost';

const app = express();

app.use('/', router);

app.listen(port, host, () => {
    console.log('Server is running...')
});