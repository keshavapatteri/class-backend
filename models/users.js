const mongoose = require('mongoose')

const UserSchema= new mongoose.Schema(
{
   name:String,
   email:{
    type:String,
    uniqe:true,
   },
   password:String,
   isAdmin:Boolean
},{
    timestamps:true
}

)
const UserModel =mongoose.model('User',UserSchema)
module.exports = UserModel