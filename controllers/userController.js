//by chatgpt
// const UserModel=require("../models/users")
// const { jwtToken } = require("../utils/jwtToken.js")
// const SignUpJoi= require("../validation/signupJoi.js")
// const bcrypt = require ("bcrypt")


// exports.signup = async (req, res) => {
//   const userDetails = req.body;
//   await SignUpJoi.validateAsync(userDetails);
//   userDetails.password = await bcrypt.hash(userDetails.password, 10);
//   const user = new UserModel(userDetails);
//   console.log(user);
//   await user.save();
//   res.status(201).send({ message: "User created successfully" });
// };

// exports.login = async (req, res) => {
//   const loginDetails= req.body;
//   await SignUpJoi.validateAsync(loginDetails);
//   const user = await UserModel.findOne({ email: loginDetails.email });
//   if (!user) {
//     return res.status(401).send({ message: "User not found" });
//   }
//   if (!await bcrypt.compare(loginDetails.password, user.password)) {
//     return res.status(401).send({ message: "Invalid password" });
//   }
//   const token = await generateToken(loginDetails.email, loginDetails.password);
//   // console.log(token);
//   res.status(200).send({status:true, message: "Login successful", token: token});
// }


const UserModel=require("../models/users")
const { jwtToken } = require("../utils/jwtToken.js")
const SignUpJoi= require("../validation/signupJoi.js")
const bcrypt = require ("bcrypt")


//signup
exports.SignUp = async(req,res)=>{
    const data = req.body
    await SignUpJoi.validateAsync(data)
 data.password = await bcrypt.hash(data.password,10);
    console.log(data)
    
    const toSave = new UserModel(data)
    await toSave.save()
    res.status(200).send("Added sucessFully")

}

exports.Login = async(req,res)=>{
    const loginDetails= req.body;
    await SignUpJoi.validateAsync(loginDetails);
    const user = await UserModel.findOne({ email: loginDetails.email });
    if (!user) {
      return res.status(401).send({ message: "User not found" });
    }
    if (!await bcrypt.compare(loginDetails.password, user.password)) {
      return res.status(401).send({ message: "Invalid password" });
    }
    const token = await jwtToken(loginDetails.email,loginDetails.password)
console.log(token);
    res.status(200).send({status:true,message:"success",token:token})

 }
