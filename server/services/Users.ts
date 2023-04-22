import pool from "../db";
import { Status } from "../enum";
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
                    if (results) {
                        const resultsJson = JSON.parse(JSON.stringify(results));
                        if (resultsJson.length > 0) resolve(resultsJson[0])
                        else resolve({});
                    };
                }
            );
        });
    }

    update(user: Users) {
        return new Promise((resolve, reject) => {
            pool.query(
                `update users set first_name=?, last_name=?, username=?, status=? where username=?;`,
                [
                    user.firstName,
                    user.lastName,
                    user.username,
                    user.status,
                    user.username,
                ],
                (error, results, _fields) => {
                    if (error) reject(error);
                    if (results) resolve(results);
                }
            )
        });
    }

    deleteUser(username: string) {
        return new Promise((resolve, reject) => {
            pool.query(
                `update users set status=? where username=?`,
                [
                    Status.DELETED,
                    username,
                ],
                (error, results, _fields) => {
                    if (error) reject(error);
                    if (results) resolve(results)
                }
            )
        })
    }
}

export default UsersService;
