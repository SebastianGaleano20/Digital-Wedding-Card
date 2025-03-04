export interface ButtonProp {
    text?: string;
    url?: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
     children?: React.ReactNode;
     variant?: string;
     disabled?: boolean;
}

export interface Input {
    id: string;
    type?: string;
    placeholder: string;
    name?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
}

export interface Textarea {
    id: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
}

export interface Select {
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
}

export interface ConfirmationModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    guestName: string
    message: string
    allergies: string
    isSubmitting: boolean
    submitSuccess: boolean
}