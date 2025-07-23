import cloudinary from "../lib/cloudinary.js";

export const addPaymentReceipt = async (req, res) => {
  const { url } = req.body;
  try {
    if (!url) {
      res.status(400).json({
        message: "Payment Receipt Required",
      });
    }

    await cloudinary.uploader.upload(url, {
      folder: "payment_receipts",
    });

    res.status(201).json({ message: "Receipt added successfully", url });
  } catch (error) {
    console.log("Error while uploading the image", error);
    res.status(500).json({ error: error.message });
  }
};
