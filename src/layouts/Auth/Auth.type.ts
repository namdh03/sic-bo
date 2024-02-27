import { FormType } from "@/services/user";

export type AuthProps = {
    title: string;
    linkUrl: string;
    linkText: string;
    submitText: string;
    onSubmit: (form: FormType) => Promise<void>;
    reverse?: boolean;
};
