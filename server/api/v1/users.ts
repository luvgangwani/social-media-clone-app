import express from 'express';
import UsersController from '../../controllers/Users';

const api = express.Router();

const usersController = new UsersController();

api.post('/register', (req, res) => {
    
    usersController
    .create(req.body)
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'User registered successfully!',
            data,
        });
    })
    .catch((error) => {
        res.status(500).json({
            success: 0,
            message: 'Error registering user.',
            error: error.message,
        })
    })
});

api.get('/', (_req, res) => {
    res.status(200).json({
        message: 'all users'
    });
})

export default api;
