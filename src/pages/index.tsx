import Image from "next/image";
import localFont from "next/font/local";
import {VideoCard} from "../components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar";
import { ShortSideBar } from "@/components/ShortSideBar";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);

  const toggleSidebar = () => {
    setShowSideBar(!showSideBar); 
    console.log(showSideBar)
  };

  return (
    <div>
      <AppBar toggleSideBar={toggleSidebar}></AppBar>
      <div className="flex mt-16">
                {showSideBar ? (<div className="w-1/5 min-w-[200px] bg-gray-900 h-screen overflow-y-auto"><SideBar /></div>) : (<ShortSideBar></ShortSideBar>)}

                <div className="flex-grow  ml-10 mt-2 mr-5">

                    <VideoGrid />
                </div>
        </div>
    </div>
  );
}
