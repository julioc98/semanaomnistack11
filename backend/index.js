const express = require('express');

const app = express();

app.get('/', (request, response) => {
    // return response.send('Hello World!');
    return response.json({oi:'oi'});
});

app.listen(3333);