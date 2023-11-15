import mongoose from "mongoose";
import { User } from "src/app/models/User.js";
import bcrypt from "bcryptjs";
import { hashPassword } from "src/utils/hashPassword.js";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const alreadyExist = await User.findOne({email: body.email});
  if (alreadyExist) {
    return Response.status(400).json({error: "User already exists"});
  }
  let { password } = body;
  if (!password?.length || password.length < 5) {
    new Error("password must be at least 5 characters");
  }
  const hashedPassword = hashPassword(password);
  const userDoc = await User.create({ ...body, password: hashedPassword });
  return Response.json(userDoc);
}
