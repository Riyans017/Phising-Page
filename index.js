const express = require('express')
const {connectToDB} = require('./db_connection')
const app = express()
const path  = require('path')
const port = 5000;

const StaticRouter = require('./routes/StaticRoute')
const UserRouter = require('./routes/User')

app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.set('views',path.resolve(__dirname,'views'))

connectToDB('mongodb://127.0.0.1:27017/computer_nobel').then(()=>{
    console.log("Connection to DB is successfull")
}).catch((err)=>{
    console.log(`Error in DB due to ${err}`)
})


app.use(express.static( path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname,'./style')))

app.use('/',StaticRouter)
app.use('/user',UserRouter)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})