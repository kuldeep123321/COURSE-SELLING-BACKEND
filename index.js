import express from "express";
const app=express();
import dns from 'node:dns/promises';
dns.setServers(['8.8.8.8', '1.1.1.1']); 

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
async function main(){await mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("mongodb is connected");
}).catch((err)=>{
    console.log("kuch toh gadbad hai daya bhen",err);
})
}
main();
import {userRouter} from "./routes/user.js";
import { courseRouter } from "./routes/course.js";
import { adminRoute } from "./routes/admin.js";
app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRoute);


app.listen(3000,()=>{
    console.log("server is running in port number 3000");
})