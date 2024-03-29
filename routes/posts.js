const express = require('express');
const router = express.Router();

// Post model
const Post = require('../models/Post');

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/posts
// @desc    Add a new post
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = new Post({
      title,
      content
    });

    await newPost.save();
    res.status(201).json({ message: 'Post added successfully', post: newPost });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add more routes for CRUD operations as needed...

module.exports = router;
