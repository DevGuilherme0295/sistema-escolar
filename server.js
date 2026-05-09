const express = require('express');
const dontenv = require('dotenv');
dontenv.config();

const UserRoutes = require('./src/routes/UserRoutes')
const app = express();

app.use(express.json());

app.use(UserRoutes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.SERVER_PORT}`);
});