import { useState } from "react";
import cartImage from "../assets/images/icon-cart.svg";
import profileImage from "../assets/images/image-avatar.png";
import menuIcon from "../assets/images/icon-menu.svg";
import closeMenu from "../assets/images/icon-close.svg";
const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  const toggleMenuBar = () => setMenuBar((visible) => !visible);
  return (
    <div className="w-full">
      <nav className="relative max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-2 py-10 border-b">
        <div className="flex items-center justify-center gap-4 md:gap-10">
          <img
            src={menuIcon}
            alt="menu icon"
            className="cursor-pointer md:hidden"
            onClick={toggleMenuBar}
          />
          <h3 className="text-4xl font-bold text-center font-kumbhSans">
            sneakers
          </h3>
          <ul className="items-center hidden gap-5 md:flex justify-normal text-darkgrayishblue">
            <li className="cursor-pointer">Collections</li>
            <li className="cursor-pointer">Men</li>
            <li className="cursor-pointer">Women</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-8">
          <img src={cartImage} alt="cart" />
          <div className="w-10 h-10 rounded-full">
            <img
              src={profileImage}
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* mobile nav  */}
        <div
          className={`md:hidden absolute top-0 left-0 -translate-x-[100%] duration-500 z-10 flex flex-col bg-white px-4 py-10 gap-14 min-h-screen w-4/6 ${
            menuBar && "translate-x-0 duration-500 ease-in-out"
          }`}
        >
          <img
            src={closeMenu}
            alt="close icon for menubar"
            className="w-4 h-4 cursor-pointer"
            onClick={toggleMenuBar}
          />
          <ul className="flex flex-col items-start justify-start gap-8 text-xl font-bold font-kumbhSans">
            <li className="cursor-pointer">Collections</li>
            <li className="cursor-pointer">Men</li>
            <li className="cursor-pointer">Women</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
