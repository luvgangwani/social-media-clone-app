import LikesService from "../services/Likes";
import { Likes, LikesResponse } from "../types";

class LikesController {

    likesServices = new LikesService()

    create(likes: Likes) {
        return this
        .likesServices
        .create(likes)
        .then(data => data)
        .catch(error => {
            throw new Error(error);
        });
    }

    getLikesByUsername(username: string) {
        return this
        .likesServices
        .getLikesByUsername(username)
        .then(data => {
            const postIds = (data as LikesResponse).map(({ post_id }) => post_id)
            return postIds;
        })
        .catch(error => {
            throw new Error(error);
        });
    }

    delete(likes: Likes) {
        return this
        .likesServices
        .delete(likes)
        .then(data => data)
        .catch(error => {
            throw new Error(error);
        });
    }
}

export default LikesController;
