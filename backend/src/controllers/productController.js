import { Product } from "../models/productModel";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ count: products.length, data: products });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const brand_id = req.body.brand_id;
    const name = req.body.name;
    const barcode = req.body.barcode;
    const import_price = req.body.import_price;
    const retail_price = req.body.retail_price;
    const category = req.body.category;
    const image = req.file.filename;

    if (
      !brand_id ||
      !name ||
      !barcode ||
      !import_price ||
      !retail_price ||
      !category ||
      !image
    ) {
      return res.status(400).json({
        message:
          "Send all required fieds: brand_name, name, barcode, import_price, retail_price, category, image",
      });
    }

    const newProduct = new Product({
      name,
      barcode,
      import_price,
      retail_price,
      category,
      image,
    });

    const savedProduct = await Product.create(newProduct);
    res.json(savedProduct);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const brand_id = req.body.brand_id;
    const name = req.body.name;
    const barcode = req.body.barcode;
    const import_price = req.body.import_price;
    const retail_price = req.body.retail_price;
    const category = req.body.category;
    const image = req.file.filename;

    if (
      !brand_id ||
      !name ||
      !barcode ||
      !import_price ||
      !retail_price ||
      !category ||
      !image
    ) {
      return res.status(400).json({
        message:
          "Send all required fieds: brand_name, name, barcode, import_price, retail_price, category, image",
      });
    }

    const id = req.params.id;
    const updatedProduct = new Product({
      name,
      barcode,
      import_price,
      retail_price,
      category,
      image,
    });

    const result = await Product.findByIdAndUpdate(id, updatedProduct);
    res.json({ message: "Product updated successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
