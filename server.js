//Importação das funções
const express = require('express')
const nunjucks = require('nunjucks')
const receitas = require('./data') // Importa arquivo externo

//Chamada da função
const server = express()

//Abertura de porta
server.listen(5000, function(){
    console.log('Server Ok!')
})

//Importação de arquivos estáticos
server.use(express.static('public'))

//Configuração da template Engine
server.set('view engine', 'njk')

nunjucks.configure('src', {
    express: server,
    autoescape: false, //Habilita Htmls dentro de variaveis
    noCache: true //Não armazena os sites em cache
})


//Criação de rotas
server.get('/', function(req, res){
    res.render('index',  { items: receitas })
})

server.get('/sobre', function(req, res){
    res.render('sobre')
})

server.get('/receitas', function(req,res){
    res.render('receitas', { items: receitas })
})

server.get('/recipe', function (req, res){
    res.render('recipe', { items: receitas })
})