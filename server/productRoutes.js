const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("./models/Product.js");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/create", upload.single("imageFile"), async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const imageBuffer = req.file ? req.file.buffer : null;
    if (!name || !price || !category || !imageBuffer) {
      return res.status(400).send({ error: "Name, price, category are required" });
    }

    const newProduct = new Product({ name, price, category, imageBuffer });
    await newProduct.save();

    res.status(201).send({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res.status(500).send({ error: "Failed to create product" });
  }
});

module.exports = router;
