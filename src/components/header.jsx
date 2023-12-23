import cartImage from "../assets/images/icon-cart.svg";
import profileImage from "../assets/images/image-avatar.png";
const Header = () => {
  return (
    <div className="w-full">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-2 py-6 border-b">
        <div className="flex items-center justify-center gap-10">
          <h3 className="text-4xl font-bold font-kumbhSans">sneakers</h3>
          <ul className="flex items-center gap-5 justify-normal text-darkgrayishblue">
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
      </nav>
    </div>
  );
};

export default Header;
