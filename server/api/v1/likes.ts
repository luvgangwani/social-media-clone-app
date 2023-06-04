import express from 'express';
import validateToken from '../../middleware/auth';
import LikesController from '../../controllers/Likes';

const api = express.Router();

const likesController = new LikesController();

api.post('/', validateToken, (req, res) => {
    const { username } = req.body.authUser;

    likesController
    .create({
        ...req.body,
        username,
    })
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'Liked!',
            data,
        })
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Unexpected error encountered while liking the post. Please try again!',
            error: error.message,
        });
    })
});

api.get('/', validateToken, (req, res) => {
    const { username } = req.body.authUser;

    likesController
    .getLikesByUsername(username)
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'Likes fetched!',
            data,
        })
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Unexpected error encountered while fetching likes information. Please try again!'
        })
    })
});

api.delete('/', validateToken, (req, res) => {
    const { username } = req.body.authUser;

    likesController
    .delete({
        ...req.body,
        username,
    })
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'Removed like!',
            data,
        });
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Unexpected error encountered removing like.',
            error: error.message,
        })
    });
});

export default api;
