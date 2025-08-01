import Order from "../models/order.js";

export const orderDetails = async (req, res) => {
  const { totalAmount, paymentStatus, paymentUrl, items } = req.body;
  const userId = req.user._id;
  try {
    const userOrderDetails = new Order({
      userId,
      items,
      totalAmount,
      paymentStatus,
      paymentUrl,
    });

    await userOrderDetails.save();
    res.status(200).json({ message: "Order added successfully" });
  } catch (error) {
    console.log("Error while adding the order Details", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getOrderDetails = async (req, res) => {
  const userId = req.user._id;
  try {
    const orderDetails = await Order.find({ userId });
    res.status(200).json({ orderDetails });
  } catch (error) {
    console.log("Error while getting the order Details", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
