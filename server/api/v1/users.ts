import express from 'express';
import UsersController from '../../controllers/Users';
import { Secret, sign } from 'jsonwebtoken';
import { Users } from '../../types';
import { compareSync } from 'bcrypt';
import validateToken from '../../middleware/auth';

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

api.post('/login', (req, res) => {
    usersController
    .getUserByUsername(req.body.username)
    .then((data) => {
        const fetchedUser = data as Users;
        if (Object.keys(fetchedUser).length > 0) {
            const comparisonResult = compareSync(req.body.password, fetchedUser.password as string)
            if (comparisonResult) {
                // delete the password as it's not supposed to be a part of the token
                fetchedUser.password = undefined;
                const token = sign({ result: fetchedUser }, process.env.JWT_SECRET_KEY as Secret, {
                    expiresIn: '1h'
                });
                res.status(200).json({
                    success: 1,
                    message: 'Login successful!',
                    token,
                });
            } else {
                res.status(401).json({
                    success: 0,
                    message: 'Password is incorrect!',
                });
            }
        } else {
            res.status(401).json({
                success: 0,
                message: 'Username does not exist!',
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Unexpected error logging in!',
            error: error.message,
        });
    })
});

api.put('/', validateToken, (req, res) => {
    usersController
    .update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        status: req.body.status
    })
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'User information updated successfully!',
            data,
        });
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Error updating user information.',
            error: error.message,
        })
    })
});

export default api;
