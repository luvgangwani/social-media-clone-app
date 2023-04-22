import express from 'express';
import validateToken from '../../middleware/auth';
import PostsController from '../../controllers/Posts';


const api = express.Router();

const postsController = new PostsController();

api.get('/', validateToken, (_req, res) => {
    res.status(200).json({
        message: 'all posts'
    });
});

api.post('/', validateToken, (req, res) => {
    postsController
    .create(req.body)
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'Post saved!',
            data,
        });
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Unexpected error encountered while saving this post. Please try again!',
            error: error.message,
        });
    })
});

export default api;
