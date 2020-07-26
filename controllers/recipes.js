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
    const { id } = req.params
    
    const recipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })
    
    res.render('description', {item: recipe})
}