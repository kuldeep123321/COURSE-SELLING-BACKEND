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
   imageurl: String
})
const Admin=new mongoose.Schema({
   email: String,
   password: String,
   firstname: String,
   lastname: String
})
const purchase=new mongoose.Schema({
   email: String,
   password: String,
   firstname: String,
   lastname: String
})

const usermodel=mongoose.Model("user",user);
const adminmodel=mongoose.Model("admin",Admin);
const coursemodel=mongoose.Model("course",Course);
const purchasemodel=mongoose.Model("purchase",purchase);