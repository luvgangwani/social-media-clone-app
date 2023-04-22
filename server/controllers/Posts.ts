import PostsService from "../services/Posts";
import { Posts } from "../types";

class PostsController {
    postsService = new PostsService();

    create(post: Posts) {
        return this
        .postsService
        .create(post)
        .then(data => data)
        .catch(error => {
            throw new Error(error);
        });
    }

    getPostsByUsername(username: string) {
        return this
        .postsService
        .getPostsByUsername(username)
        .then(data => data)
        .catch(error => {
            throw new Error(error)
        });
    }
}

export default PostsController;
