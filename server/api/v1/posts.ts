import express from 'express';

const api = express.Router();

api.get('/', (_req, res) => {
    res.status(200).json({
        message: 'all posts'
    });
})

export default api;
