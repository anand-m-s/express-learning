var express=require('express')
var path=require('path')

const app=express()

app.use((req,res,next)=>{
    console.log('middleware')
    next()
})

app.get('/signup',function(req,res,next){
    res.sendFile(path.join(__dirname,'signup.html'))
    console.log('middle');
    
    next()
})

app.use((req,res,)=>{
    console.log('middleware End')


})

app.post('/signup',(req,res)=>res.send('signup page test'))

app.get('/about',(req,res)=> res.send('about'))




app.listen(3000,()=>{console.log('server started')

})

