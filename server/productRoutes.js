const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("./models/Product.js");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/create", upload.single("imageFile"), async (req, res) => {
  try {
    const { name, price, description, link, category } = req.body;
    const imageBuffer = req.file ? req.file.buffer : null;
    if (!name || !price || !category || !imageBuffer) {
      return res.status(400).send({ error: "Name, price, category are required" });
    }

    const newProduct = new Product({ name, price, description, link, category, imageBuffer });
    await newProduct.save();

    res.status(201).send({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res.status(500).send({ error: "Failed to create product" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch products" });
  }
});

module.exports = router;
