
/**
 Desafio para casa:

 Criar um rota DELETE /users/:i
 
 Regras:
    1. A rota deve apagar  apneas o usuário  que tem o mesmo ID recebido;
    2. A rota deve recebr 404 quando receber um ID que não existe;
 
 Um pouco mais avançado:
    No lugar de apagar o usuário da "tabela", adicionar um campo chamado 
    is_deleted, e na lista de usuários retornar apenas o usuário que não tem
    esse campo definido; 
 
    Soft delete
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