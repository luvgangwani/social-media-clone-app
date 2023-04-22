import express from 'express';
import validateToken from '../../middleware/auth';

const api = express.Router();

api.get('/', validateToken, (_req, res) => {
    res.status(200).json({
        message: 'all posts'
    });
})

export default api;
