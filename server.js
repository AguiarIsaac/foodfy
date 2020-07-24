//Importação das funções
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

//Chamada da função
const server = express()

//Middlewares
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)


//Configuração da template Engine
server.set('view engine', 'njk')

nunjucks.configure('src', {
    express: server,
    autoescape: false, //Habilita Htmls dentro de variaveis
    noCache: true //Não armazena os sites em cache
})

//Abertura de porta
server.listen(5000, function(){
    console.log('Server Ok!')
})