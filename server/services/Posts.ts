import pool from "../db";
import { Status } from "../enum";
import { Posts } from "../types";

class PostsService {
    create(post: Posts) {
        return new Promise((resolve, reject) => {
            pool.query(
                `insert into posts set ?`,
                {
                    body: post.body,
                    username: post.username,
                    status: Status.NEW,
                },
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
                `select id, name, body, likesCount, created, updated from vw_feed where username=?`,
                [username],
                (error, results, _fields) => {
                    if (error) reject(error)
                    if (results) resolve(results)
                }
            )
        });
    }

    getPostById(id: number, username: string) {
        return new Promise((resolve, reject) => {
            pool.query(
                `select id, body from vw_feed where username=? and id=?`,
                [username, id],
                (error, results, _fields) => {
                    if (error) reject(error)
                    if (results) {
                        const resultsJson = JSON.parse(JSON.stringify(results));
                        if (resultsJson.length > 0) resolve(resultsJson[0])
                        else resolve({});
                    }
                }
            )
        });
    }

    update(post: Posts) {
        return new Promise((resolve, reject) => {
            pool.query(
                `update posts set body=?, username=? where id=?`,
                [
                    post.body,
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
