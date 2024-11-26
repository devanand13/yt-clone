export const SearchBar = () => {
    return (
        <div className="relative w-full h-10 flex items-center rounded-3xl bg-black border border-gray-500">
            <input
                type="search"
                id="default-search"
                className="h-full w-full p-4 pl-10 text-sm text-gray-900 bg-transparent border-gray rounded-l-3xl focus:ring-0 focus:border-blue-500 focus:outline-none dark:text-white"
                placeholder="Search"
                required
            />
            <button
                type="submit"
                className="flex items-center justify-center w-20 h-10 bg-gray-700 opacity-80 rounded-r-3xl"
            >
                <svg
                    className="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </button>
        </div>
    );
};
