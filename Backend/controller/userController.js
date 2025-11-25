const User = require("../model/userModel");
const bcrypt = require("bcrypt");

// REGISTER USER
const addUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // Check if email already exists
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).send("Email already exists!");

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });

    await userData.save();
    res.status(200).send("User Registered!");
  } catch (err) {
    res.status(500).send(`Error: ${err.message}`);
  }
};

// GET ALL USERS (Admin)
const getUser = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(`Error: ${err.message}`);
  }
};

// REMOVE USER
const removeUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User Removed!");
  } catch (err) {
    res.status(500).send(`Error: ${err.message}`);
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send("User Updated!");
  } catch (err) {
    res.status(500).send(`Error: ${err.message}`);
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check email exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("Invalid email!");

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send("Incorrect password!");

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(`Error: ${err.message}`);
  }
};

module.exports = { addUser, getUser, removeUser, updateUser, loginUser };
