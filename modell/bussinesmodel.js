import mongoose from "mongoose";

const bussinessSchema = new mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  bussinessName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  keyword: {
    type: String,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  photos: [
    {
      type: String,
    },
  ],
  isDelete: {
    type: Boolean,
    default: false,
  },
});

const Bussiness = mongoose.model("bussiness", bussinessSchema);

export default Bussiness;
