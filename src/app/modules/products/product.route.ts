import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/create-Product", productController.createProduct);
router.get("/getAllProduct", productController.getAllProduct);
router.get("/:productId", productController.getSingleProduct);
router.put("/:productId", productController.updateProduct);
router.delete("/:productId", productController.deleteProduct);

export const bookRoute = router;
