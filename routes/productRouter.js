import express from "express"
import { addProduct } from "../controller/productControll.js";

const productRouter = express.Router();

productRouter.post("/",addProduct)

export default productRouter;