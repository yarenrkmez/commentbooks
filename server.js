const express=require('express')
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const path =require('path')
const items=require('./routes/api/items');


const app=express();
app.use(bodyParser.json());

const db=require('./config/keys').mongoURI;
mongoose
.connect(db)
.then(()=>console.log('mongodb connected'))
.catch(err=> console.log('hata'+err));
//use routes
app.use('/api/items',items);
//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //Set satic folder
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const port=process.env.port || 5000
app.listen(port,()=>console.log('Server started on port ${port}')); 
// var server = app.listen(process.env.PORT || 5000, function () {
//     var port = server.address().port;
//     console.log("Express is working on port " + port);
//   });