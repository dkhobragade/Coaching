import Cart from "../models/Cart.js";
import mongoose from "mongoose";
import Product from "../models/Product.js";

export const addToCart = async (req, res) => {
  const userId = req.user._id;
  const { productId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res
      .status(400)
      .json({ message: "Invalid productId/ Try After some time" });
  }

  try {
    const cart = await Cart.findOne({ userId });
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity: 1, price: product.price }],
      });
    } else {
      cart.items = cart.items || [];

      const existingItem = cart.items.find(
        (item) => item.productId.toString() === productId
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price = product.price;
      } else {
        cart.items.push({ productId, quantity: 1, price: product.price });
      }
    }

    cart.updatedAt = Date.now();
    await cart.save();

    res.status(200).json({ message: "Item added successfully" });
  } catch (error) {
    console.log("Error while adding items to the cart", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const viewCartItems = async (req, res) => {
  const userId = req.user._id;
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(200).json({ message: "Your cart is empty" });
    }
    res.status(200).json({ cart });
  } catch (error) {
    console.log("Error in view cart", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
