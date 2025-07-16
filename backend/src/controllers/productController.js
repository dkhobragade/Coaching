import Product from "../models/Product";

export const productDetails = async (req, res) => {
  try {
    const items = await Product.find();
    res.status(200).json({ items });
  } catch (error) {
    console.log("Error while getting the Product Details", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
