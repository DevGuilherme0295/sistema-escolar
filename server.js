const express = require('express');

const app = express();

app.use(express.json());

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

app.get('/produto{/*categoria}{/*produto}', (req,res) => {
    const {categoria, produto} = req.params;

    if(categoria && produto){
        return res.send(`Página do produto ${produto}`);
    } 
    
    if (categoria && !produto) {
        return res.send(`Todos os produtos da categoria: ${categoria}`);
    } 
    
    return res.send(`Todos os produtos`);
     
});

app.post('/login', (req,res) => {
    const {email, password} = req.body;

    if(email == 'email@email.com' && password == 'senha123'){
        return res.send('Usuário logado com sucesso!');
    }
    return res.send('Login incorreto!');
});

app.listen(1234, () => {
    console.log("Servidor iniciado na porta 1234");
});