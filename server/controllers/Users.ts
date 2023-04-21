import UsersService from "../services/Users";
import { Users } from "../types";
import { genSaltSync, hashSync } from 'bcrypt';

class UsersController {

    usersService = new UsersService();

    create(user: Users) {
        const salt = genSaltSync(10);
        user.password = hashSync(user.password, salt);

        return this
        .usersService
        .create(user)
        .then(data => data)
        .catch(error => {
            throw new Error(error)
        });
    }
}

export default UsersController;
