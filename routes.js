const express = require('express')
const routes = express.Router()
const recipe_list = require('./data')
const recipe_routes = ('./controllers/recipes')


//Criação de rotas
routes.get('/', function(req, res){
    res.render('home',  { items: recipe_list })
})

routes.get('/about', function(req, res){
    res.render('about')
})

routes.get('/recipes', function(req,res){
    res.render('recipes', { items: recipe_list })
})

routes.get('/recipes/:index', function(req, res){
    const recipes = recipe_list
    const recipeIndex = req.params.index
    
    res.render('description', {item: recipes[recipeIndex]})
})


routes.get('/admin/recipes', function(req, res){
    return res.render('recipes/index', { recipes: recipe_list } )
})

routes.get('/admin/recipes/:id', function(req, res){
   const { id } = req.params
   
   const foundRecipe = recipe_list.find(function(recipe){
       return recipe.id == id
   })

   if (!foundRecipe) return res.send('Recipe Not Found!')

   res.render('recipes/show', { recipe: foundRecipe })
})



module.exports = routes