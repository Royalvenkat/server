const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3001', // Allow only your React app
  methods: ['GET', 'POST', 'OPTIONS'], // Allow these methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Add any custom headers you plan to use
}));
app.use(express.json());

let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Create a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser); // Return the created user
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
