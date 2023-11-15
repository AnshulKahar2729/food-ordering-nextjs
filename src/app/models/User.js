import { model, models, Schema } from "mongoose";
// import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

/* UserSchema.post("validate", function (user) {
  const rawPass = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(rawPass, salt);
});
 */
export const User = models?.User || model("User", UserSchema);
