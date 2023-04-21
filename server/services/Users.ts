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
}

export default UsersService;
