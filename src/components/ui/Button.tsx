import animation from '@/src/styles/Animation.module.css'

interface ButtonProp {
    text: string;
    url?: string;
}

export const Button = ({ text, url }: ButtonProp) => {
    return (
        <button
            type="button"
            className={`${animation.title} text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        </button>
    )
}