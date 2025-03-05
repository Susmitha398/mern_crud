const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/Posts'); // Import routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());  // Enable CORS

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB error:", err));

// Use routes
app.use('/api/posts', postRoutes);  // API route for posts

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
