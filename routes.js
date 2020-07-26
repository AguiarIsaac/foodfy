const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes.js')
const admin = require('./controllers/admin_recipes')

routes.get('/', recipes.index )
routes.get('/about', recipes.about )
routes.get('/recipes', recipes.recipes )
routes.get('/recipes/:id', recipes.description )

routes.get('/admin/recipes', admin.index )
routes.get('/admin', admin.home )
routes.get('/admin/recipes/create', admin.create )
routes.post('/admin/recipes/create', admin.post )
routes.get('/admin/recipes/:id', admin.show )
routes.get('/admin/recipes/:id/edit', admin.edit )
routes.put('/admin/recipes', admin.put )

module.exports = routes