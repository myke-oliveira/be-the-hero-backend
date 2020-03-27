const express = require('express');

const app = express();

app.use(express.json());

app.post('/users/:id', (request, response) => {

    const params = request.body;

    console.log(params);


    return response.json({
        event: 'Semana Omnistack 11.0',
        student: 'Diego Fernandes'
    });
});

app.listen(3333);

console.log('Server running on https://localhost:3333...');
