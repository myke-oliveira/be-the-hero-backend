const express = require('express');

const app = express();

app.post('/users/:id', (request, response) => {

    const params = request.params;

    console.log(params);


    return response.json({
        event: 'Semana Omnistack 11.0',
        student: 'Myke Albuquerque Pinto de Oliveira'
    });
});

app.listen(3333);

console.log('Server running on https://localhost:3333...');
