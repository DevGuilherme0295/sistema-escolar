
/**
 Desafio para casa:

 Criar uma rota DELETE /users/:id

 Regras:
    1. A rota deve apagar apenas o usuario que tem o mesmo ID recebido na requisição
    2. A rota deve retornar um erro 404 quando receber um id que não existe

 Um pouco mais avançado (Soft Delete):
    No lugar de apagar o usuario da "tabela", adicionar um campo
    chamado is_deleted, e na lista de usuarios retornar apenas
    o usuario que não tem esse campo definido.

    Em projetos grandes é comum não apagar de fato os registro,
    e no lugar de apagar definir apenas uma flag para esse usuario
    não ser mais considerado nas buscas, assim evita perder dados.
 */

const fakeUsers = [
    {id: 1, name: "Joselito", email: 'joselito@mail.com'}
];

function ListUser(req, res) {
    const users = fakeUsers.filter(user => user.deleted !== true);
    res.send(users);
}

function FindUser(req, res) {
    const {id} = req.params;
    const user = fakeUsers.find(user => Number(user.id) === Number(id));
    if(!user) {
        res.status(404);
        return res.json({
            error: "Not found"
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
            user.email = email || user.email
        }
    });

    res.send({
        message: "Usuário atualizado com sucesso!"
    });
}

function DeleteUser(req, res) {
    const {id} = req.params;

    const userPosition = fakeUsers.findIndex(user => user && Number(user.id) === Number(id))
    fakeUsers[userPosition].deleted = true;

    res.send({
        message: "Usuario deletado com sucesso!"
    });
}

module.exports = {
    ListUser,
    FindUser,
    CreateUser,
    UpdateUser,
    DeleteUser
}