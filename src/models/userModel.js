const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    trustedAccounts: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
      },
    ],
    favouriteTweets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
