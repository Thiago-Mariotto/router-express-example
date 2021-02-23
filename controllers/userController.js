const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.status(200).json({ Msg: "Listando todas os usuarios." }));
userRouter.get('/:id', (req, res) => res.status(200).json({ Msg: "Listando um usuario especifico." }));
userRouter.post('/cadastrar', (req, res) => res.status(201).json({ Msg: "Usuario registrado com sucesso." }));

module.exports = userRouter;