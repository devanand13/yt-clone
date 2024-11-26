export const SigninBtn = () => {
    return (
        <div className="flex justify-end">
            <button
                type="button"
                className="flex items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A3.993 3.993 0 016 16a3.993 3.993 0 011.879-1.804M18.879 17.804A3.993 3.993 0 0118 16a3.993 3.993 0 01-1.879-1.804M15 11a4 4 0 10-6 0M12 14c-2.5 0-5 1.5-5 3v1h10v-1c0-1.5-2.5-3-5-3z"
                    />
                </svg>
                Sign In
            </button>
        </div>
    );
};
