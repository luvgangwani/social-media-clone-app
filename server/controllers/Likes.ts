import LikesService from "../services/Likes";
import { Likes } from "../types";

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
