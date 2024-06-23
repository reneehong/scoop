const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("./models/Product.js");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const User = require("./models/User.js");

router.post("/create", upload.single("imageFile"), async (req, res) => {
  try {
    const { name, price, description, link, category, userId } = req.body;
    const imageBuffer = req.file ? req.file.buffer : null;
    if (!name || !price || !category || !imageBuffer) {
      return res.status(400).send({ error: "Name, price, category are required" });
    }

    const newProduct = new Product({
      name,
      price,
      description,
      link,
      category,
      imageBuffer,
      userId,
    });
    await newProduct.save();
    console.log(name, price, description, link, category, imageBuffer, userId);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    user.products.push(newProduct._id);
    await user.save();
    res.status(201).send({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res.status(500).send({ error: "Failed to create product" });
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }

    const user = await User.findById(product.userId);
    if (user) {
      user.products = user.products.filter((p) => p.toString() !== productId);
      await user.save();
    }

    await product.remove();
    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Failed to delete product" });
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
