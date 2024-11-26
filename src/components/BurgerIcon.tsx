export const BurgerIcon = ({toggleSideBar})=>{
    return (
        <button onClick = {toggleSideBar} className="flex flex-col items-center justify-center space-y-1 pl-4">
            <div className="w-5 h-0.5 bg-gray-800 dark:bg-white rounded opacity-70"></div>
            <div className="w-5 h-0.5 bg-gray-800 dark:bg-white rounded opacity-70"></div>
            <div className="w-5 h-0.5 bg-gray-800 dark:bg-white rounded opacity-70"></div>
        </button>
    );
}