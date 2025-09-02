import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    village: { type: String },
    role: { type: String, enum: ["farmer", "admin"], default: "farmer" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
