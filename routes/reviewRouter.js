import express from "express";
import { addReview, deleteReview, getReviews } from "../controller/reviewController.js";

const reviewRouter =express.Router();
reviewRouter.post("/",addReview)
reviewRouter.get("/",getReviews)
reviewRouter.delete("/:email",deleteReview)

export default reviewRouter;