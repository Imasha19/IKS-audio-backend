import express from "express";
import { addInquiry, getInquiries } from "../controller/inquiryController.js";


const inquiryRouter = express.Router();

inquiryRouter.post("/",addInquiry);
inquiryRouter.get("/",getInquiries);

export default inquiryRouter;