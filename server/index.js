const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const FakeDb =require('./fake-db')
const productRoutes = require('./routes/products')
const userRoutes = require('./routes/users')
const path=require('path')

mongoose.connect(config.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(
        ()=>{
            if(process.env.NODE_ENV !=='production'){
                const fakeDb =new FakeDb()
                fakeDb.initDb()
            }
        }
)


const app =express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/v1/products',productRoutes)
app.use('/api/v1/users',userRoutes)

if(process.env.NODE_ENV ==='production'){
    const appPath=path.join(__dirname,'..','dist','angular-app')
    app.use(express.static(appPath))
    app.get("*",function(req,res){
        res.sendFile(path.resolve(appPath,'index.html'))
    })
}
const PORT = process.env.PORT||'3001'


app.listen(PORT,function(){
    console.log('i am runnting')
})

