// controllers/authController.js

import User from "../models/userModel.js";

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      username,
      email,
      password
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export default signup;
