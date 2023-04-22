import pool from "../db";
import { Status } from "../enum";
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

    update(post: Posts) {
        return new Promise((resolve, reject) => {
            pool.query(
                `update posts set body=?, status=?, username=? where id=?`,
                [
                    post.body,
                    post.status,
                    post.username,
                    post.id,
                ],
                (error, results, _fields) => {
                    if (error) reject(error);
                    if (results) resolve(results);
                }
            )
        });
    }

    deletePost(id: Number) {
        return new Promise((resolve, reject) => {
            pool.query(
                `update posts set status=? where id=?`,
                [
                    Status.DELETED,
                    id,
                ],
                (error, results, _fields) => {
                    if (error) reject(error);
                    if (results) resolve(results)
                }
            )
        });
    }
}

export default PostsService;
