import cloudinary from "../lib/cloudinary.js";
import Address from "../models/addressSchema.js";

export const addPaymentReceipt = async (req, res) => {
  const { url } = req.body;
  const userId = req.user._id;

  try {
    if (!url) {
      res.status(400).json({
        message: "Payment Receipt Required",
      });
    }

    const uploadeResp = await cloudinary.uploader.upload(url, {
      folder: "payment_receipts",
    });

    const updateAddressDetails = await Address.findOneAndUpdate(
      { userId: userId },
      {
        $set: {
          paymentUrl: uploadeResp.secure_url,
        },
      },
      { new: true }
    );

    res
      .status(201)
      .json({ message: "Receipt added successfully", updateAddressDetails });
  } catch (error) {
    console.log("Error while uploading the image", error);
    res.status(500).json({ error: error.message });
  }
};
