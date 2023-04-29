import express from 'express';
import validateToken from '../../middleware/auth';
import ConnectionsController from '../../controllers/Connections';
import { Status } from '../../enum';

const api = express.Router();

const connectionsController = new ConnectionsController();

api.post('/', validateToken, (req, res) => {
    const { username: fromUsername } = req.body.authUser;

    connectionsController
    .create({
        fromUsername,
        toUsername: req.body.toUsername,
        status: Status.REQUESTED,
    })
    .then(data => {
        res.status(200).json({
            success: 1,
            message: 'Connection request sent successfully!',
            data,
        });
    })
    .catch(error => {
        res.status(500).json({
            success: 0,
            message: 'Unexpected error encountered while sending a connection request. Please try again!',
            error: error.message,
        });
    })

});

export default api;
