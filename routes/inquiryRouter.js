import express from "express";
import { addInquiry, deleteInquiry, getInquiries } from "../controller/inquiryController.js";


const inquiryRouter = express.Router();

inquiryRouter.post("/",addInquiry);
inquiryRouter.get("/",getInquiries);
inquiryRouter.delete("/:id",deleteInquiry)

export default inquiryRouter;