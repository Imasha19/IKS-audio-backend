import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import jwt from "jsonwebtoken";

const app =express()

app.use(bodyParser.json());
app.use((req,res,next)=>{
    let token= req.header
    ("Authorization")

    

   if(token!=null){
     token= token.replace("Bearer ","")
     jwt.verify(token,"IK-secreat-19",
     (err,decoded)=>{

        if(!err){
            req.user = decoded;
        }
     })

   }

next()
    
})

const mongoUrl = "mongodb+srv://imashasandanayaka:6b4ph3aX9xE6rZR2@cluster0.owk7o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl)

const connection = mongoose.connection
connection.once("open",()=>{
    console.log("MongoDB connection established successfully")
})

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)

app.listen(3000,()=>{
   console.log("Server is running on port 3000")


})

