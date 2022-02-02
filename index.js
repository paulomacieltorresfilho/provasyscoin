const express = require('express');
const app = express();

const USER = '"syscoin"';
const PASSWORD = '"meEscolhe"';
const PORT = process.env.PORT || 3000;

app.get('/provasyscoin', (req, res) => {
    const { user, password } = req.query;

    if (user !== USER || password !== PASSWORD) res.status(401).send({message: 'Credenciais erradas.'});
    else res.status(200).send({message: 'Meu nome completo é Paulo Maciel Torres Filho. Eu quero essa vaga!'});
})

app.listen(
    PORT,
    () => {console.log('Listening')}
);