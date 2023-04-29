import pool from "../db";
import { Connections } from "../types";

class ConnectionsService {
    create(connections: Connections) {
        return new Promise((resolve, reject) => {
            pool
            .query(
                `insert into connections set ?`,
                {
                    from_username: connections.fromUsername,
                    to_username: connections.toUsername,
                    status: connections.status,
                },
                (errors, results, _fields) => {
                    if (errors) reject(errors);
                    if (results) resolve(results);
                }
            )
        });
    }

    update(connections: Connections) {
        return new Promise((resolve, reject) => {
            pool
            .query(
                `update connections set status=? where from_username=? and to_username=?`,
                [
                    connections.status,
                    connections.fromUsername,
                    connections.toUsername,
                ],
                (error, results, _fields) => {
                    if (error) reject(error);
                    if (results) resolve(results);
                }
            )
        });
    }
}

export default ConnectionsService;
