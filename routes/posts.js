const express = require('express');
const router = express.Router();
const PostData = require('../models/post');

router.get('/post', async (req, res) => {
    try {
        const allPost = await PostData.find()
        return res.status(200).json(allPost);
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/post/create', async (req, res) => {
    const post = req.body;

    const newPost = new PostData(post);

    try {
        const savePost = await newPost.save()
        return res.status(201).json(savePost)
    } catch(err) {
        return res.status(500).json(err)
    }
})

module.exports = router;