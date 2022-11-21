const {create, getUserByPhone} = require('./user.service');
const bcrypt = require('bcryptjs')
//import the json web token 
const {sign} = require('jsonwebtoken');
const { json } = require('express');

module.exports = {
    
    createUser: (req, res) => {
      const body  = req.body;
      const salt = bcrypt.genSaltSync(10);
      body.password = bcrypt.hashSync(body.password, salt);
      create(body, (error, result)=>{
        //if results not found 
        if(error){
            console.log(error);
            return res.status(500).json({
                success: 0,
                message: "Database connection error"
            });
        } 
        //if we got the results
        return res.status(200).json({
            success: 1,
            result
        });
      });
    },

    //login 
     loginUser: (req, res) =>{
      const body = req.body;
      getUserByPhone(body.phone, (err, result)=>{
        if(err) {
          console.log(err);
        }
        if(!result) {
          return res.json({
            success: 0,
            data: "Invalid phone and password"
          });
        }
        const ans = bcrypt.compareSync(body.password, result.password)
        if(ans){
          ans.password = undefined;
          const jsontoken = sign({ans: result}, process.env.jwttoken, {
            expiresIn: "1h"
          });
          return res.json({
            success: 1,
            token: jsontoken
          });
        }else{
          return res.json({
            success: 0,
            data: "Inavlid phone or password"
          })
        }
      });      
     },
};