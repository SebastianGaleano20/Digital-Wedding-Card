interface Input {
    type: string;
    placeholder: string;
}

export default function Input({ type, placeholder }: Input) {
    return (
        <input
            type={type}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
            placeholder={placeholder} />
    )
}