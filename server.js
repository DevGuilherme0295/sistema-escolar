const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Requisição recebida!")
});

app.get('/home', (req, res) => {
    res.send("Home Page");
});

/**
 * Desafio:
 * Obter o mesmo resulta porem no lugar de usar a url com query
 * http://localhost:1234/me?cidade=Natal&nome=Jeselito
 * 
 * Usar a url com parametros dinamicos
 * http://localhost:1234/me/Jeselito/Maracanau
 * 
 * Joselito e Maracanau podem ser qualquer coisa, são informações
 * passadas na url assim como a query.
 * 
 * Documentação do express sobre rotas
 * https://expressjs.com/pt-br/guide/routing.html
 */
app.get('/me', (req, res) => {
    const {nome, cidade} = req.query;
    res.send(`Meu nome é ${nome}, Moro em ${cidade}`);
});

app.listen(1234, () => {
    console.log("Servidor iniciado na porta 1234");
});