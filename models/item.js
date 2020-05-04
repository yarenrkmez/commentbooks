const moongose=require('mongoose');
const Schema=moongose.Schema;

const ItemSchema=new Schema({
 
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
});

module.exports=Item=moongose.model('item',ItemSchema);