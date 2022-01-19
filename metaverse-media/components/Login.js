import Image from "next/image"
import {useMoralis} from 'react-moralis'
function Login() {
    const {authenticate}= useMoralis();
    return (
        <div>
            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
            <Image
            className="object-cover rounded-full"
            src="https://raw.githubusercontent.com/hiverkiya/Metaverse-Media/main/metaverse-media/media/ethereum.png"
            height={200}
            width={200}
            />
            <button 
            onClick={ authenticate}
            className="bg-red-600 rounded-lg p-5 font-bold text-lg  animate-pulse">LOGIN TO METAVERSE MEDIA</button>
            </div>

            <div className="w-full h-screen ">
            <Image
            src="https://raw.githubusercontent.com/hiverkiya/Metaverse-Media/main/metaverse-media/media/bg.jpg"
            layout="fill"
            objectFit="cover"
            
            />
            </div>
        </div>
    )
}

export default Login
