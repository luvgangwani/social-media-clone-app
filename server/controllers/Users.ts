import { Status } from "../enum";
import UsersService from "../services/Users";
import { Users } from "../types";
import { genSaltSync, hashSync } from 'bcrypt';

class UsersController {

    usersService = new UsersService();

    create(user: Users) {
        const salt = genSaltSync(10);
        user.password = hashSync(user.password as string, salt);

        user.status = Status.NEW;

        return this
        .usersService
        .create(user)
        .then(data => data)
        .catch(error => {
            throw new Error(error)
        });
    }

    getUserByUsername(username: string) {
        return this
        .usersService
        .getUserByUsername(username)
        .then(data => data)
        .catch (error => {
            throw new Error(error)
        })
    }

    search(searchQuery: string, username: string) {
        return this
        .usersService
        .search(`%${searchQuery}%`, username)
        .then(data => data)
        .catch(error => {
            throw new Error(error)
        })
    }

    update(user: Users) {
        return this
        .usersService
        .update(user)
        .then(data => data)
        .catch(error => {
            throw new Error(error)
        })
    }

    deleteUser(username: string) {
        return this
        .usersService
        .deleteUser(username)
        .then(data => data)
        .catch(error => {
            throw new Error(error)
        });
    }
}

export default UsersController;
