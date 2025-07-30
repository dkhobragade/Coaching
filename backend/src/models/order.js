import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: Number,
      price: Number,
      name: String,
      description: String,
      imageUrl: String,
    },
  ],
  totalAmount: Number,
  paymentStatus: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending",
  },
  paymentUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);
