const express = require('express');

const productRouter = express.Router();

productRouter.get('/', (req, res) => res.status(200).json({ Msg: "Listando todos os produtos." }));
productRouter.get('/:id', (req, res) => res.status(200).json({ Msg: "Listando um produto especifico." }));
productRouter.post('/cadastrar', (req, res) => res.status(201).json({ Msg: "Produto cadastrado com sucesso." }));

module.exports = productRouter;