const axios=require('axios')
const { response } = require('express')

exports.homeRoutes=(req,res,next)=>{

    axios.get('http://localhost:3000/api/users')
    .then(response=>{
         
        //console.log(response)
        res.render('index',{users:response.data})
    })
    .catch(err=>{

        res.send(err)
    })
    
}

exports.addUser=(req,res,next)=>{

    res.render('add-user')
}

exports.updateUser=(req,res,next)=>{
 
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(userData=>{
     
        console.log(userData)
        res.render('update-user',{user:userData.data})
    })
    .catch(err=>{

        res.send(err)
    })
    
}