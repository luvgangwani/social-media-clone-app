import express, { Request, Response} from 'express';
import dotenv from 'dotenv';
import AppConfig from './app-config';
import posts from './api/v1/posts';
import users from './api/v1/users';

const { PORT } = AppConfig;

const app = express();

app.use(express.json());

app.use('/api/v1/posts', posts);
app.use('/api/v1/users', users);

dotenv.config();

app.get('/', (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello, World!',
    });
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
