import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    brand_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Brand",
    },
    name: {
      type: String,
      required: true,
    },
    barcode: {
      type: String,
      required: true,
    },
    import_price: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    retail_price: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    category: {
      name: {
        type: String,
        required: true,
        enum: ["phone", "accessories"],
      },
      type: {
        type: String,
      },
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export { Product };
