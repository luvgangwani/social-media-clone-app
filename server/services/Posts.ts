import pool from "../db";
import { Posts } from "../types";

class PostsService {
    create(post: Posts) {
        return new Promise((resolve, reject) => {
            pool.query(
                `insert into posts set ?`,
                post,
                (error, results, _fields) => {
                    if (error) reject(error)
                    if (results) resolve(results)
                }
            )
        });
    }

    getPostsByUsername(username: string) {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from posts where username=?`,
                [username],
                (error, results, _fields) => {
                    if (error) reject(error)
                    if (results) resolve(results)
                }
            )
        });
    }
}

export default PostsService;
