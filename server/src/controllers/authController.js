import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER USER ==========================
export async function register(req, res) {
  try {
    const { username, email, password, role } = req.body;

    // Check if username already exists
    const exists = await User.findOne({ username });
    if (exists) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const hashed = await bcrypt.hash(password, 10);

    await User.create({
      username,
      email,
      password: hashed,
      role
    });

    res.json({ message: "Registration successful" });

  } catch (err) {
    res.status(500).json({ message: "Registration error", error: err.message });
  }
}


// LOGIN USER ==========================
export async function login(req, res) {
  try {
    const { username, password, role } = req.body;

    // Find user by username AND role
    const user = await User.findOne({ username, role });
    if (!user) {
      return res.status(404).json({ message: "User not found for this role" });
    }

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Create JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
}