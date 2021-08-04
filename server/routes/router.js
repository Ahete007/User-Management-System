const express=require('express')
const router=express.Router()
const services=require('../services/render')
const controller=require('../controller/controller')

router.get('/',services.homeRoutes)

router.get('/add-user',services.addUser)

router.get('/update-user',services.updateUser)

router.post('/api/users',controller.createUser)
router.get('/api/users',controller.find)
router.put('/api/users/:id',controller.updateUser)
router.delete('/api/users/:id',controller.deleteUser)


module.exports=router