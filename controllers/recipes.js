const data = require('../data.json')
const fs = require('fs') 

exports.index = function (req, res) {
    res.render('home',  { items: data.recipes })
}

exports.about =  function(req, res){
    res.render('about')
}

exports.recipes = function(req,res){
    res.render('recipes', { items: data.recipes })
}

exports.description = function(req, res){
    // mandar apenas receita selecionada pelo ID
    res.render('description')
}