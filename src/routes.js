const express = require('express');

const routes = express.Router();

routes.post('/users/:id', (request, response) => {

    const params = request.body;

    console.log(params);


    return response.json({
        event: 'Semana Omnistack 11.0',
        student: 'Diego Fernandes'
    });
});

module.exports = routes;