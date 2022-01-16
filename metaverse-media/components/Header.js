import Image from "next/image"
import { useMoralis} from "react-moralis"
import Avatar from "./Avatar"
function Header() {
    const {user }=useMoralis();
    return (
        <div>
            <div className="">
         <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
        <Image layout="fill" className=" rounded-full" 
         objectFit="cover"
         src="http://links.papareact.com/3pi"
         />
         </div>
        <div>
            {/* Avatar*/}
           
            <div className="h-48 w-48 relative lg:max-auto border-pink-600 border-8 rounded-full"> <Avatar logoutOnPress/></div>
            {/* Welcome message*/}
            {/* Username*/}
            {/* Change username component*/}
        </div>
        
         </div>
        </div>
    )
}

export default Header
