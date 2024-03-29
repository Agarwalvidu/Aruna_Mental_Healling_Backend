const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb+srv://vidushiagg:vidushi%40123@atlascluster.metohzo.mongodb.net/aruna', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Body parser middleware
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Routes
app.use('/api/posts', require('./routes/posts'));

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
