import ConnectionsService from "../services/Connections";
import { Connections } from "../types";

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

    update(connections: Connections) {
        return this
        .connectionsService
        .update(connections)
        .then(data => data)
        .catch(error => {
            throw new Error(error);
        });
    }
}

export default ConnectionsController;
