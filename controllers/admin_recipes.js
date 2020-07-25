const data = require('../data.json')
const fs = require('fs')

exports.index =  function(req, res){
    console.log(data)
    return res.render('recipes/index', { recipes: data.recipes } )   
}

exports.home = function(req, res){
    return res.render('recipes/index', { recipes: data.recipes } )
}

exports.create = function(req, res){
    res.render('admin/recipes/create')
}

exports.post = function(req, res){
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
}

exports.show = function(req, res){
    const { id } = req.params
    
    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })
 
    if (!foundRecipe) return res.send('Recipe Not Found!')
 
    res.render('recipes/show', { recipe: foundRecipe })
}

exports.edit = function(req, res){
    // corrigir direcionamento
    return res.render('recipes/edit')
}