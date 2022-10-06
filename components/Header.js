import Image from "next/image";
import ChangeUsername from "./ChangeUsername";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            className=" rounded-full"
            objectFit="cover"
            src="https://raw.githubusercontent.com/hiverkiya/Metaverse-Media/main/metaverse-media/media/profile.jpg"
            alt=""
          />
        </div>
        <div className="col-span-4  text-left lg:text-center">
          {/* Avatar*/}

          <div className="h-48 w-48 relative lg:mx-auto border-pink-400 border-8 rounded-full">
            {" "}
            <Avatar logoutOnPress />
          </div>
          {/* Welcome message*/}
          <h1 className="text-3xl">WELCOME TO METAVERSE MEDIA</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          {/* Username*/}
          {/* Change username component*/}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
