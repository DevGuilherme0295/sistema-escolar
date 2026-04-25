
/**
 Desafio para casa:

 Criar um rota PUT /users/:id que atualiza os dados de um usuario que 
 já existe.
 
 Regras:
 1. Usuario precisa ter id numerico
 2. No POST o novo usuario deve ser criado com id
 3. No PUT deve ser atualizado apenas os campos envidos no body
 
 Exemplo de fakeUsers com id: [{id: 1, name: "Joselito", email: 'joselito@mail.com'}]
 */

const fakeUsers = [
    {id: 1, name: "Joselito", email: 'joselito@mail.com'}
];

function ListUser(req, res) {
    res.json(fakeUsers);
}

function FindUserById(req, res) {
    const {id} = req.params;
    const user = fakeUsers.find(user => Number(user.id) === Number(id));

    if(!user){
        res.status(404);
        return res.json({
            error: "Not Found !!!"
        });
    }
    res.json(user);
}

function CreateUser(req, res) {
    const {name, email} = req.body;

    const id = fakeUsers.length + 1;

    fakeUsers.push({id, name, email});
    res.json({
        message: "Usuario cadastrado com sucesso!"
    });
}

function UpdateUser(req, res) {
    const {id} = req.params;
    const {name, email} = req.body;

    fakeUsers.forEach(user => {
        if(Number(user.id) === Number(id)) {
            user.name = name || user.name;
            user.email = email || user.email;
        }
    });

    res.send({
        message: 'Usuário encontrado com sucesso!'
    });
}

module.exports = {
    ListUser,
    FindUserById,
    CreateUser,
    UpdateUser
}