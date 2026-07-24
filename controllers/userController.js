// controllers/userController.js

// Mock data acting as a database for this example
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// GET
exports.getAllUsers = (req, res) => {
  try {
    throw new Error("Something went wrong");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error occurred" });
  }
};

// GET
exports.getUserById = (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error occurred" });
  }
};

// POST /api/users
exports.createUser = (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name parameter is required" });
    }

    const newUser = {
      id: users.length + 1,
      name: name,
    };

    users.push(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user" });
  }
};
