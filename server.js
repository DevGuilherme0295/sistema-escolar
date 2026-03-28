const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Requisição chegou!');
})

app.get('/home', (req, res) => {
    res.send('Home Page!');
})
app.get('/me', (req, res) => {
    res.send('Meu nome é Guilherme, moro em Fortaleza!');
})

app.listen(1234, () => {
    console.log("Servidor iniciado na porta 1234");
});
