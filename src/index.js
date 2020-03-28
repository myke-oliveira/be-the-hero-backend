const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(
    // origin: 'http://meuap.com';
));
app.use(express.json());
app.use(routes);

app.listen(3333);

console.log('Server running on https://localhost:3333...');
