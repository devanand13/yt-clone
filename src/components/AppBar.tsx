import { SearchBar } from "./SearchBar"
import { YoutubeLogo } from "./YoutubeLogo"
import { SigninBtn } from "./SignInBtn"
import { BurgerIcon } from "./BurgerIcon"

export const AppBar = ({toggleSideBar}) =>{
    return <div className="grid grid-cols-12 bg-black text-white fixed top-0 left-0 w-full p-3 shadow-md z-50">
        <div className="col-span-3 flex">
            <BurgerIcon className="hover:bg-gray-100" toggleSideBar={toggleSideBar}></BurgerIcon>
            <YoutubeLogo></YoutubeLogo>
        </div>
        <div className="col-span-5 rounded-3xl">
            <SearchBar></SearchBar>
        </div>
        <div className="col-span-4">
            <SigninBtn></SigninBtn>
        </div>
    </div>
}