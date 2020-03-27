const express = require('express');

const app = express();

/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET:    Buscar uma informação do back-end.
 * POST:   Criar uma informação no back-end.
 * PUT:    Alterar uma informação no back-end.
 * DELETE: Deletar uma informação no backend.
 */

app.get('/users', (request, response) => {

    const params = request.query;

    console.log(params);


    return response.json({
        event: 'Semana Omnistack 11.0',
        student: 'Myke Albuquerque Pinto de Oliveira'
    });
});

app.listen(3333);
