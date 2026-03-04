import express from "express";
import { Router } from "express";

const courseRouter=Router();

courseRouter.post("./purchase",function(req,res){
    req.json({
        message: " hurrrya"
    })
})
courseRouter.get("./preview",function(req,res){
    req.json({
        message: " hurrrya"
    })
})
export {courseRouter};