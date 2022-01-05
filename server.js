'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello', (req, res) => {
    res.send('there!')
});

app.listen(PORT, HOST);

console.log(`Server is running on http://${HOST}:${PORT}`);