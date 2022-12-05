const express=require('express')
const app=express();
const cors=require('cors')
const http=require('http')
require('./connection')
const server=http.createServer(app)
const {Server}=require('socket.io')//for notifications on frontend
const io=new Server(server,{
    cors:'*',
    methods:'*'
})
 
 const userRoutes=require('./routes/userRoutes')
 const productRoutes=require('./routes/productRoutes')
 const imageRoutes=require('./routes/imagesRoutes')
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/users',userRoutes)
app.use('/products',productRoutes)
app.use('/images', imageRoutes);
server.listen(8080,()=>{
    console.log('Server is listening on port',8080)
})