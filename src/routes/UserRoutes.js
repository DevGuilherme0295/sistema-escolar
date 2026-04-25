const { Router } = require("express");
const { ListUser, CreateUser, UpdateUser, FindUserById } = require("../controllers/User");

const route = Router();

route.get("/users/", ListUser);
route.get("/users/:id", FindUserById);
route.post("/users/", CreateUser);
route.put("/users/:id", UpdateUser);

module.exports = route;