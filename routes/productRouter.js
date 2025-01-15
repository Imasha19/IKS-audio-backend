import express from "express"
import { addProduct, getProducts } from "../controller/productControll.js";

const productRouter = express.Router();

productRouter.post("/",addProduct)
productRouter.get("/",getProducts)

export default productRouter;
