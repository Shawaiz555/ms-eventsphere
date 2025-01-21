import bcrypt from "bcryptjs";
import adminLogin from "../Models/adminLogin";

export async function validateUser(email, password) {
  const AdminLogin = await adminLogin.findOne({ email });

  if (!AdminLogin) {
    return null; // User not found
  }

  const isValidPassword = await bcrypt.compare(password, AdminLogin.password);

  if (!isValidPassword) {
    return null; // Invalid password
  }

  return {
    id: AdminLogin._id,
    email: AdminLogin.email,
  };
}
