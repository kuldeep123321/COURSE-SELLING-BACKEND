import express from "express"
import { Router } from "express"
const adminRoute=Router();

adminRoute.post("/login", function(req,res){
    res.json({
        message:" you are now login"
    })
})
adminRoute.post("/signup", function(req,res){
    res.json({
        message:" you are now login"
    })
})
adminRoute.post("/create", function(req,res){
    res.json({
        message:" you are now login"
    })
})
adminRoute.post("/delete", function(req,res){
    res.json({
        message:" you are now login"
    })
})
adminRoute.post("/addcontent", function(req,res){
    res.json({
        message:" you are now login"
    })
})



export {adminRoute};