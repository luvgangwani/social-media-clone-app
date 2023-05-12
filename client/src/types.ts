import { FormEvent } from "react";

export type LoginTemplateProps = {
    handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void,
    buttonText: string,
    children: React.ReactNode,
}

export type LoaderProps = {
    show: boolean
}

export type LoaderState = {
    loader: {
        show: boolean,
    }
}

export type ModalProps = {
    title: string,
    children: React.ReactNode,
};
