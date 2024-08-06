require('dotenv').config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWTSECRETKEY;

const jwtToken = async(user,password)=>{
  let token = await jwt.sign({user,password},secretKey);

return token;

}

module.exports ={jwtToken};
