import express, { Request, Response} from 'express';
import dotenv from 'dotenv';
import AppConfig from './app-config';
import posts from './api/v1/posts';
import users from './api/v1/users';
import likes from './api/v1/likes';
import connections from './api/v1/connections';

const { PORT } = AppConfig;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
});

app.use('/api/v1/posts', posts);
app.use('/api/v1/users', users);
app.use('/api/v1/likes', likes);
app.use('/api/v1/connections', connections);

dotenv.config();

app.get('/', (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello, World!',
    });
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
