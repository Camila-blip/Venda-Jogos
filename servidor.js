const porta = 3003 
const express =  require('express')
const app = express()
const bancodedados = require('./bancodedados')
const bodyparser = require('body-parser')
const cors = require('cors');
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

//urlencoded é o  tipo da requisição que é enviado
app.use(bodyparser.urlencoded({ extended: true}))
// requisicao = req, resposta = res o que envia e o send
// use pega qualquer nome da url
app.get('/lojas', (req, res, next) =>{
   // res.send({ nome: 'Notebook', preco: 123.45}) // converte para JSON automaticamente
   res.send(bancodedados.getProdutos())
})

app.get('/lojas/:id', (req, res, next) =>{
    res.send(bancodedados.getProduto(req.params.id))
 })

 app.post('/lojas', (req, res, next) =>{
    const produto = bancodedados.salvarProduto({
        Nome: req.body.Nome,
        Preco: req.body.Preco
    })
    res.send(produto)
 })

 //put geralmente altera os dados
 app.put('/lojas', (req, res, next) =>{
    const produto = bancodedados.salvarProduto({
        Nome: req.body.Nome,
        Preco: req.body.Preco
    })
    res.send(produto)
 })

app.listen(porta, () =>{
    console.log(`Servidor  executando na porta ${porta}.`)
})

//http://localhost:3003/produtos
//npm i --save body-parser@1.18.2 -E //entrega o corpo do json
