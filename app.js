const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const app=express()
const path=require('path')
const router=require('./server/routes/router')
const connectDB=require('./server/database/connection')


dotenv.config({path:'config.env'})
const PORT=process.env.PORT||8080

connectDB()

app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('tiny'))
app.set('view engine','ejs')
app.set('views','views')

app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

app.use(router)



app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`)
})