import express from "express";
import { Router } from "express";

const userRouter=Router();
userRouter.post("/signup",function(req,res){
    res.json({
        message:" signup completed"
    })
})
userRouter.post("/signin",function(req,res){
    res.json({
        message: "siginin completed"
    })
})
userRouter.get("/purchase",function(req,res){
    res.json({
        message: "your purchasea are"
    })
})

export {userRouter};
