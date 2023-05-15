import { FormEvent } from "react";

export type AuthTemplateProps = {
    handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void,
    buttonText: string,
    pageTitle: string,
    isSignUp: boolean,
    children: React.ReactNode,
};

export type LoaderProps = {
    show: boolean
};

export type LoaderState = {
    loader: {
        show: boolean,
    }
};

export type ModalState = {
    modal: {
        show: boolean,
    }
};

export type ModalProps = {
    title: string,
    children: React.ReactNode,
};

export type SignupState = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    confirmPassword?: string,
};

export type PostCardProps = {
    id: number,
    name: string,
    isFeed?: boolean,
    body: string,
    likeCount: number,
    timestamp: string,
};

export type PostsState = {
    id: number,
    name: string,
    body: string,
    likesCount: number,
    created: string,
    updated: string,
};

export type ProfileState = {
    firstName: string,
    lastName: string,
    username: string,
};
