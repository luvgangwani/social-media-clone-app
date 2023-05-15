import { Status } from "./enum"

export type Users = {
    firstName: string,
    lastName: string,
    username: string,
    password?: string,
    status: Status,
    created?: string,
    updated?: string,
}

export type Posts = {
    id?: Number,
    body: string,
    status: Status,
    username: string,
    created?: string,
    updated?: string,
}

export type Likes = {
    id?: Number,
    username: string,
    postId: string,
    created?: string,
    updated?: string,
};

export type Connections = {
    id?: Number,
    fromUsername: string,
    toUsername: string,
    status: Status,
    created?: string,
    updated?: string,
};

export type Profile = {
    firstName: string,
    lastName: string,
    username: string,
}
