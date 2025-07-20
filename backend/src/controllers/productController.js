import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const items = await Product.find();
    res.status(200).json({ items });
  } catch (error) {
    console.log("Error while getting the Product Details", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.body;
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res
        .status(400)
        .json({ message: "Please try again. No product found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error while getting the Product Details", error.message);
    res.status(500).json({
      message: "Problems while deleting the product, please try again ",
    });
  }
};
