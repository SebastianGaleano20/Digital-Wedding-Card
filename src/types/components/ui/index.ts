export interface ButtonProp {
    text: string;
    url?: string;
    type?: string;
}

export interface Input {
    type: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}