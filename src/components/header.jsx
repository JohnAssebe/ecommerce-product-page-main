import { useState } from "react";
import cartImage from "../assets/images/icon-cart.svg";
import profileImage from "../assets/images/image-avatar.png";
import menuIcon from "../assets/images/icon-menu.svg";
import closeMenu from "../assets/images/icon-close.svg";
import { useProductStore } from "../store/productStore";
import CartNotification from "./cartNotification";
const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  const toggleMenuBar = () => {
    setMenuBar((visible) => !visible);
    setNotificationVisible(false);
  };
  const products = useProductStore((state) => state.products);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const toggleNotification = () => {
    setNotificationVisible((visible) => !visible);
    setMenuBar(false);
  };
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
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <div className="relative cursor-pointer">
            <img src={cartImage} alt="cart" onClick={toggleNotification} />
            <div
              className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white translate-x-3 -translate-y-1/2 rounded-full bg-orange"
              onClick={toggleNotification}
            >
              {products}
            </div>
            {notificationVisible && (
              <div className="absolute top-[100%] translate-y-2 -translate-x-[70%] xl:-translate-x-1/2 z-20">
                <CartNotification toggle={toggleNotification} />
              </div>
            )}
          </div>
          <div className="w-10 h-10 duration-100 ease-in rounded-full hover:border-2 border-orange">
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
