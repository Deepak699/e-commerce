import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsById,
  createProductReview,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
