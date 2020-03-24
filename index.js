const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        event: 'Semana Omnistack 11.0',
        student: 'Myke Albuquerque Pinto de Oliveira'
    });
});

app.listen(3333);
