import mongoose from "mongoose";
const user=new mongoose.Schema({
   email: String,
   password: String,
   firstname: String,
   lastname: String
})  
const Course=new mongoose.Schema({
   title : String,
   description: String,
   price: Number,
   imageurl: String,
   creatorId: mongoose.Schema.Types.ObjectId
})
const Admin=new mongoose.Schema({
   email: String,
   password: String,
   firstname: String,
   lastname: String
})
const purchase=new mongoose.Schema({
   userId: mongoose.Schema.Types.ObjectId,
   courseId: mongoose.Schema.Types.ObjectId
})

const usermodel=mongoose.model("user",user);
const adminmodel=mongoose.model("admin",Admin);
const coursemodel=mongoose.model("course",Course);
const purchasemodel=mongoose.model("purchase",purchase);
export {
   usermodel,adminmodel,coursemodel,purchasemodel
};