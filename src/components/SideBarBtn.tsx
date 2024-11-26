export const SideBarBtn = (props: any) => {
    return (
        <div>
            <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-xl">
                <span className="pl-3 mr-6">{props.icon}</span>
                <span>{props.title}</span>
            </li>
        </div>
    );
};
