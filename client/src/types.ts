import { FormEvent } from "react";

export type LoginTemplateProps = {
    handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void,
    buttonText: string,
    children: React.ReactNode,
}