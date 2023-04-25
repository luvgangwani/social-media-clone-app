import pool from "../db";
import { Likes } from "../types";

class LikesService {
    create(likes: Likes) {
        return new Promise((resolve, reject) => {
            pool.query(
                `insert into likes set ?`,
                {
                    post_id: likes.postId,
                    username: likes.username,
                },
                (error, results, _fields) => {
                    if (error) reject(error);
                    if (results) resolve(results);
                }
            );
        });
    }

    delete(likes: Likes) {
        return new Promise((resolve, reject) => {
            pool.query(
                `delete from likes where username=? and post_id=?`,
                [
                    likes.username,
                    likes.postId,
                ],
                (error, results, _fields) => {
                    if (error) reject(error);
                    if (results) resolve(results);
                }
            );
        });
    }
}

export default LikesService;
