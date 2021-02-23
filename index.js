const express = require('express');

const productController = require('./controllers/productsController');
const saleController = require('./controllers/salesController');
const userController = require('./controllers/userController');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).json({ Msg: "Página inicial" }));

app.use('/produtos', productController);
app.use('/vendas', saleController);
app.use('/usuarios', userController);


app.listen(port, () => console.log(`Open on port ${port}`));