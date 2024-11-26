import { FaHome, FaVideo, FaPlayCircle, FaUserCircle, FaDownload } from "react-icons/fa";
export const ShortSideBar = () => {
    return <div className="pt-10">
        <div className="h-20 flex flex-col items-center justify-center rounded-2xl hover:bg-gray-900 w-20">
                <span className="">
                    <FaHome className="w-6 h-6 text-gray-100" />
                </span>
                <span className="text-xs">Home</span>
        </div>
        <div className="h-20 flex flex-col items-center justify-center rounded-2xl hover:bg-gray-900 w-20">
                <span className="">
                    <FaVideo className="w-6 h-6 text-gray-100" />
                </span>
                <span className="text-xs">Shorts</span>
        </div>
        <div className="h-20 flex flex-col items-center justify-center rounded-2xl hover:bg-gray-900 w-20">
                <span className="">
                    <FaPlayCircle className="w-6 h-6 text-gray-100" />
                </span>
                <span className="text-xs">Subscriptions</span>
        </div>
        <div className="h-20 flex flex-col items-center justify-center rounded-2xl hover:bg-gray-900 w-20">
                <span className="">
                    <FaUserCircle className="w-6 h-6 text-gray-100" />
                </span>
                <span className="text-xs">You</span>
        </div>
        <div className="h-20 flex flex-col items-center justify-center rounded-2xl hover:bg-gray-900 w-20">
                <span className="">
                    <FaDownload className="w-6 h-6 text-gray-100" />
                </span>
                <span className="text-xs">Downloads</span>
        </div>
    </div>
}