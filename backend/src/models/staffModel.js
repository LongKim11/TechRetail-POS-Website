import mongoose from "mongoose";

const staffSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    account: {
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    status: {
      type: String,
      required: true,
      enum: ["Active", "Inactive"],
    },
    is_locked: {
      type: Boolean,
      required: true,
      enum: ["true", "false"],
    },
  },
  { timestamps: true }
);

const Staff = mongoose.model("Staff", staffSchema);
export { Staff };
