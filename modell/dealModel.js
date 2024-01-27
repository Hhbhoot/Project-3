import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    totalAmount: {
      type: Number,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Deal = mongoose.model("deal", dealSchema);

export default Deal;
