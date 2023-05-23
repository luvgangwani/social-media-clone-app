import ConnectionsService from "../services/Connections";
import { ConnectionList, Connections } from "../types";

class ConnectionsController {

    connectionsService = new ConnectionsService();

    create(connections: Connections) {
        return this
        .connectionsService
        .create(connections)
        .then(data => data)
        .catch(error => {
            throw new Error(error);
        });
    }

    delete(connections: Connections) {
        return this
        .connectionsService
        .delete(connections)
        .then(data => data)
        .catch(error => {
            throw new Error(error);
        });
    }

    getConnectionListByUsername(username: string) {
        return this
        .connectionsService
       .getConnectionListByUsername(username)
       .then((data) => {
            const response: string[] = [];
            (data as ConnectionList[]).map(({ from_username, to_username }) => {
                if (from_username !== username) response.push(from_username);
                if (to_username !== username) response.push(to_username);
            })
            return response;
        })
       .catch(error => {
        throw new Error(error);
       });
    }
}

export default ConnectionsController;
