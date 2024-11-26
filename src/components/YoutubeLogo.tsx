import { FaYoutube } from "react-icons/fa"

export const YoutubeLogo = () => {
    return <div className="flex items-center space-x-2 pl-5">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="w-8 h-8 text-red-500"
    >
        <path
            fill="currentColor"
            d="M549.655 124.083c-6.281-23.65-24.774-42.202-48.411-48.461C456.79 64 288 64 288 64s-168.79 0-213.243 11.622c-23.636 6.259-42.129 24.811-48.411 48.461C16.256 170.64 16 215.758 16 256s.256 85.36 10.346 131.917c6.281 23.65 24.774 42.202 48.411 48.461C119.21 448 288 448 288 448s168.79 0 213.243-11.622c23.636-6.259 42.129-24.811 48.411-48.461C559.744 341.36 560 296.242 560 256s-.256-85.36-10.345-131.917z"
        />
        <path
            fill="#FFFFFF"
            d="M232 336.516V175.484L384 256l-152 80.516z"
        />
    </svg>
    <span className="font-bold text-xl">YouTube</span>
</div>

}