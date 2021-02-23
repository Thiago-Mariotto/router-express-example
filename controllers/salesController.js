const express = require('express');

const saleRouter = express.Router();

saleRouter.get('/', (req, res) => res.status(200).json({ Msg: "Listando todas as vendas." }));
saleRouter.get('/:id', (req, res) => res.status(200).json({ Msg: "Listando um avenda especifica." }));
saleRouter.post('/cadastrar', (req, res) => res.status(201).json({ Msg: "Venda cadastrada com sucesso." }));

module.exports = saleRouter;