let Userdb=require('../model/model')

exports.createUser=(req,res,next)=>{

    if(!req.body){
        return res.status(400).send({message:'Content cannot be empty'})
        
    }
    const user=new Userdb({

        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status,
    })
   
    user
    .save(user)
    .then(data=>{
       // res.send(data)
       res.redirect('/add-user')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || 'Some error occured while creating a user'
        })
    })
}

exports.find=(req,res,next)=>{

    if(req.query.id){

        const id=req.query.id
        Userdb.findById(id)
        .then(data=>{
            
            if(!data){

                res.status(404).send({message:`Not found user with id ${id}`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
           
            res.status(500).send({message:`Error finding user with id ${id}`})
        })
    }

    else{
    Userdb.find()
    .then(user=>{
       
        res.send(user)
    }) 
    .catch(err=>{
        
        res.status(500).send({
            message:err.message || 'error occured while finding a user'
        })
    })
}
}

exports.updateUser=(req,res,next)=>{
    if(!req.body){
        return  res.status(400).send({message:'Data to update cannot be empty'})
        
    }

    const id=req.params.id
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({message:`Cannot Update user with ${id} Maybe user not found`})
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{

        res.status(500).send({message:'Error updating user information'})
    })


}

exports.deleteUser=(req,res,next)=>{

    const id=req.params.id
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot delete user with id ${id} Maybe id is wrong `})
        }
        else{
            res.send({
                message:'User was deleted successfully'
            })
        }
    })
    .catch(err=>{

        res.status(500).send({
            message:`Could not delete user with id ${id}`
        })
    })
    
}