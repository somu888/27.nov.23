//const bodyParser = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
//const mongoose=require('mongoose');
const product =require('./model/productmodel')


const app = express();
app.use(express.json())

 app.get('/', (req,res) => {
  res.send("its is also running");
 });

 app.get('/blog', (req,res) => {
  res.send("its is also running blog somu");
 });
//mongodb://localhost:27017/
app.post('/product', async(req,res) => {
  
  try{
    
    const product = await product.create(req.body)
    res.status(200).json(product);
  }catch (error){
    console.log(error.message);
    res.status(500).json({message :error.message})
  }
});


mongoose.set("strictQuery",false)

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
  console.log('mongoose connect');
  app.listen(3000 ,( ) => {
    console .log('server startde at 3000')  
  });
}).catch((error)=>{
  console.log("error");
})
