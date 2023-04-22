import express from 'express';
import validateToken from '../../middleware/auth';
import PostsController from '../../controllers/Posts';


const api = express.Router();

const postsController = new PostsController();

api.get('/', validateToken, (req, res) => {
    const { username } = req.body.authUser;
    
    postsController
    .getPostsByUsername(username)
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'Posts fetched!',
            data,
        });
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Unexpected error encountered while fetching posts. Please try again!',
            error: error.message,
        });
    })
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

api.put('/', validateToken, (req, res) => {
    const { username } = req.body.authUser;

    postsController
    .update({
        ...req.body,
        username
    })
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'Post updated successfully!',
            data,
        });
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Unexpected error encountered while updating posts. Please try again!',
            error: error.message, 
        });
    })
});

api.delete('/', validateToken, (req, res) => {
    postsController
    .deletePost(req.body.id)
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'Post deleted successfully!',
            data
        });
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Unexpected error encountered while deleting this post. Please try again!',
            error: error.message,
        });
    })
});

export default api;
