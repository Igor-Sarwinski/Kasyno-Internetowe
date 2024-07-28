const express=require('express');
const route=express.Router()

const services = require('../services/render')
const controller=require('../controller/controller')

// Route dla backendu
route.get('/',services.homeRoutes);
route.get('/add-user',services.add_user);
route.get('/update-user',services.update_user);

//api
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)
route.post('/api/login', controller.login);
route.post('/api/logout', controller.logout);
route.get('/api/user/:id', controller.getUserById);
route.get('/api/top-users', controller.getTopUsers);
module.exports=route
