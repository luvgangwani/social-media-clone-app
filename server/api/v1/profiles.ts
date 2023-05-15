import express from 'express';
import ProfilesController from '../../controllers/Profiles';
import validateToken from '../../middleware/auth';

const api = express.Router();

const profilesController = new ProfilesController();

api.get('/', validateToken, (req, res) => {
    const { username } = req.body.authUser;
    profilesController
    .getByUsername(username)
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'Profiles fetched successfully!',
            data,
        })
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Unexpected error encountered while fetching profile information!',
            error: error.message,
        });
    })
});

api.put('/', validateToken, (req, res) => {
    const { firstName, lastName, authUser } = req.body;
    const { username } = authUser;
    
    profilesController
    .update({
        firstName,
        lastName,
        username,
    })
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'Profile updated successfully!',
            data,
        });
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Unexpected error encountered while updating profile information',
            error: error.message,
        });
    })
});

export default api;
