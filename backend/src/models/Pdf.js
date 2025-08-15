import mongoose from "mongoose";

const PdfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  tags: String,
  pdfImg: String,
});

export default mongoose.model("PDF", PdfSchema);
