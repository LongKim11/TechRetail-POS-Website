import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";
import { uploadProductImg } from "../middlewares/uploadImage/multer";

const router = express.Router();

router.get("/", async (req, res) => {
  getAllProducts(req, res);
});

router.get("/:id", async (req, res) => {
  getProductById(req, res);
});

router.post("/", uploadProductImg.single("product-form"), async (req, res) => {
  createProduct(req, res);
});

router.put(
  "/:id",
  uploadProductImg.single("product-form"),
  async (req, res) => {
    updateProduct(req, res);
  }
);

router.delete("/:id", async (req, res) => {
  deleteProduct(req, res);
});

export default router;
