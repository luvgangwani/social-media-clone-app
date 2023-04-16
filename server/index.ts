import express, { Request, Response} from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import AppConfig from './app-config';

const { PORT } = AppConfig;

const app = express();

dotenv.config();

app.get('/', (_req: Request, res: Response) => {
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_ROOT_USERNAME,
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: Number(process.env.MYSQL_PORT),
    });

    connection.connect();

    connection.query(`select * from vw_feed`, (_error, _result, _fields) => {
        if (_error) res.json({
            error: _error
        });

        if (_result) res.json({
            data: _result,
        })
    });

    connection.end();
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
