import express from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'

const router   = express.Router()

export default function(passport){
  router.post(`/login`,(req,res,next)=>{
    passport.authenticate('local-login',(err, user,info)=>{
      let token;
      if(err) res.status(504).json(err);
      if(user){
        let expiry = new Date();
        expiry.setDate(expiry.getDate()+1);
        let token = jwt.sign({
          _id:Math.floor(Math.random() * 10000),
          email:user.email,
          role:'Young Grasshopper',
          exp:parseInt(expiry.getTime()/1000)
        },config.jwtSecret)
        res.status(200);
        res.json({'token':token})
      }else{
        res.status(401).json(info)
      }
    })(req,res,next)
  });
  return router
};