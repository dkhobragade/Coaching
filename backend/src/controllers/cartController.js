import Cart from "../models/Cart.js";

export const addUserCartItems = async (req, res) => {
  const { userId, cartItems } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: cartItems,
      });
    } else {
      cart.items = cart.items || [];

      cartItems.forEach((newItems) => {
        const existingItem = cart.items.find(
          (item) => item.productId.toString() === newItems.productId
        );

        if (existingItem) {
          existingItem.quantity += newItems.quantity;
        } else {
          cart.items.push(newItems);
        }
      });
    }

    cart.updatedAt = Date.now();
    await cart.save();

    res.status(200).json({ message: "Item updated successfully", cart });
  } catch (error) {
    console.log("Error while adding items to the cart", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
