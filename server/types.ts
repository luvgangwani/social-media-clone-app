import { Status } from "./enum"

export type Users = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    status: Status,
    created?: string,
    updated?: string,
}

export type Posts = {
    body: string,
    status: Status,
    username: string,
    created?: string,
    updated?: string,
}
