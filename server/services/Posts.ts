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
}

export default PostsService;
