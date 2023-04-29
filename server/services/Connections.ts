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
}

export default ConnectionsService;
