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
    res.render('home',  { items: receitas })
})

server.get('/about', function(req, res){
    res.render('about')
})

server.get('/recipes', function(req,res){
    res.render('recipes', { items: receitas })
})

// server.get('/recipes/:id', function(req, res) {
//     const id = req.params.id
//     return res.render('recipe', { items: receitas })
// })

server.get('/recipes/:index', function(req, res){
    const recipes = receitas
    const recipeIndex = req.params.index
    
    res.render('description', {item: recipes[recipeIndex]})
})