import type { Input } from "@/src/types/components/ui";

export default function Input({ type, placeholder, name, value, onChange }: Input) {
    return (
        <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400"
            placeholder={placeholder} />
    )
}