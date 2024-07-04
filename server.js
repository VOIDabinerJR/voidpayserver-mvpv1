const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Rotas
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


// Servir arquivos estáticos (opcional)
const publicDirectory = path.join(__dirname);
app.use(express.static(publicDirectory));








app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});



