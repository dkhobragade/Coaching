import Product from "../models/Product.js";

export const getProductDetails = async (req, res) => {
  try {
    const items = await Product.find();
    res.status(200).json({ items });
  } catch (error) {
    console.log("Error while getting the Product Details", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
