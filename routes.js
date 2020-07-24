const express = require('express')
const routes = express.Router()
const data = require('./data.json')
const fs = require('fs')


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
    console.log(data)
    return res.render('recipes/index', { recipes: data.recipes } )
    
})

routes.get('/admin/recipes/create', function(req, res){
    res.render('recipes/create')
})

routes.post('/admin/recipes/create', function(req, res){
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == ''){
            return res.send('Preencha todos os campos!')
        }
    }

    let { title, author, image_url, ingredients, methods, info} = req.body

    const id = Number(data.recipes.length + 1)

    data.recipes.push({
        id,
        title,
        author,
        image_url,
        ingredients,
        methods,
        info
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) { return res.send('Erro na gravação de informações')}
        return res.redirect('/admin/recipes')
    })
})

routes.get('/admin/recipes/:id', function(req, res){
   const { id } = req.params
   
   const foundRecipe = data.recipes.find(function(recipe){
       return recipe.id == id
   })

   if (!foundRecipe) return res.send('Recipe Not Found!')

   res.render('recipes/show', { recipe: foundRecipe })
})

routes.get('/admin', function (req, res){
    return res.redirect('/admin/recipes')
})

routes.get('/teste', (req, res) => {
    res.render('recipes/teste')
})

module.exports = routes