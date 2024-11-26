import { SideBarBtn } from "./SideBarBtn";
import { FaHome, FaVideo, FaPlayCircle, FaUserCircle, FaHistory } from "react-icons/fa";

const sideBarItems1 = [{
        title:"Home",
        icon:<FaHome className="w-6 h-6 text-gray-100" />
    },
    {
        title:"Shorts",
        icon:<FaVideo className="w-5 h-5 text-gray-100" />
    },
    {
        title:"Subscriptions",
        icon:<FaPlayCircle className="w-5 h-5 text-gray-100"/>
    }
]

const sideBarItems2 = [
    {
        title:"You",
        icon:<FaUserCircle className="w-5 h-5 text-gray-100"/>
    },
    {
        title:"History",
        icon:<FaHistory className="w-5 h-5 text-gray-100"/>
    }
]

const sideBarItems3 = [
    {
        title:"Trending",
        icon:<FaUserCircle className="w-5 h-5 text-gray-100"/>
    },
    {
        title:"Music",
        icon:<FaHistory className="w-5 h-5 text-gray-100"/>
    },
    {
        title:"Movies & TV",
        icon:<FaUserCircle className="w-5 h-5 text-gray-100"/>
    },
    {
        title:"Gaming",
        icon:<FaHistory className="w-5 h-5 text-gray-100"/>
    },
    {
        title:"News",
        icon:<FaUserCircle className="w-5 h-5 text-gray-100"/>
    },
    {
        title:"Sport",
        icon:<FaHistory className="w-5 h-5 text-gray-100"/>
    },
    {
        title:"Learning",
        icon:<FaUserCircle className="w-5 h-5 text-gray-100"/>
    },
    {
        title:"Fashion & beauty",
        icon:<FaHistory className="w-5 h-5 text-gray-100"/>
    },
    {
        title:"Podcasts",
        icon:<FaUserCircle className="w-5 h-5 text-gray-100"/>
    },
    {
        title:"Playables",
        icon:<FaHistory className="w-5 h-5 text-gray-100"/>
    },
]

export const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-60 bg-black text-white shadow-md overflow-y-auto scrollbar-hidden hover:scrollbar-thin dark-scrollbar">
            <div className="p-4 text-lg font-bold border-b border-gray-700">
                Menu
            </div>
            <ul className="mt-4 space-y-2">
                {sideBarItems1.map((item, index) => (
                    <SideBarBtn key={index} title={item.title} icon={item.icon} />
                ))}
                <div className="w-[95%] h-[1px] bg-gray-800 dark:bg-white opacity-30 mt-5"></div>
                {sideBarItems2.map((item, index) => (
                    <SideBarBtn key={index} title={item.title} icon={item.icon} />
                ))}
            </ul>
            <div className="w-[95%] h-[1px] bg-gray-800 dark:bg-white opacity-30 mt-5"></div>
            <div className="pl-5 pt-5 font-bold">
                Explore
            </div>
            <ul className="mt-4 space-y-2">
                {sideBarItems3.map((item, index) => (
                    <SideBarBtn key={index} title={item.title} icon={item.icon} />
                ))}
            </ul>
        </div>
    );
};
