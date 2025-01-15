import Product from "../models/product.js";
import { isItAdmin } from "./userController.js";


export async function addProduct(req,res){
    console.log(req.user)

    if(req.user == null){
        res.status(401).json({
            message:"Please login and try again"
        })
        return
    }

    if(req.user.role !="admin"){
        res.status(403).json({
            message:"You are not authorized to perform this action."
        })
        return
    }

    const data =req.body;
    const newProduct = new Product(data);
    
    try{
        await newProduct.save();
        res.json({
            message:"Product registered successfully"
        })
        
    }catch(error){
        res.status(500).json({
            error:"Product registration failed"
        })
    }

}

export async function getProducts(req,res) {

    try{
       if(isItAdmin(req)) { 
        const  products=await Product.find();
        res.json(products);
        return;
      }else{
        const products = await Product.find
        ({availablility:true});
        res.json(products);
        return;
      }
    }catch(e){
         res.status(500).json({
            message: "Failed to get products"
         })
    }
}


