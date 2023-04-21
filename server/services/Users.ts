import pool from "../db";
import { Users } from "../types";

class UsersService {
    create(user: Users) {
        return new Promise((resolve, reject) => {
            pool.query(
                `insert into users set ?;`,
                {
                    first_name: user.firstName,
                    last_name: user.lastName,
                    username: user.username,
                    password: user.password,
                    status: user.status,
                },
                (error, results, _fields) => {
                    if (error) reject(error);
                    if (results) resolve(results);
                }
            );
        });
    }

    getUserByUsername(username: string) {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from vw_users where username=?;`,
                [username],
                (error, results, _fields) => {
                    if (error) reject(error);
                    if (results) resolve(JSON.parse(JSON.stringify(results))[0]);
                }
            );
        });
    }
}

export default UsersService;
