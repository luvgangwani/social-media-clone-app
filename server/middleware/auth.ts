import { NextFunction, Request, Response } from "express";
import { Secret, verify } from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.get('authorization');

    if(token) {
        token = token.split(' ')[1];
        verify(token, process.env.JWT_SECRET_KEY as Secret, (error, _decoded) => {
            if (error) {
                res.status(500).json({
                    success: 0,
                    message: 'Unexpected authentication error. Please try again!',
                    error,
                })
            } else {
                next();
            }
        });
    } else {
        res.status(401).json({
            success: 0,
            message: 'Invalid authentication. Please log in.'
        });
    }
}

export default validateToken;