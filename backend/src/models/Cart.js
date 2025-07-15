import mongoose from "mongoose";

const CartItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    red: "Product",
    required: true,
  },

  quantity: {
    type: Number,
    default: 0,
  },
});

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [CartItemsSchema],
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Cart", CartSchema);
