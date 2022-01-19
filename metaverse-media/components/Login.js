import Image from "next/image"
import {useMoralis} from 'react-moralis'
function Login() {
    const {authenticate}= useMoralis();
    return (
        <div>
            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
            <Image
            className="object-cover rounded-full"
            src="https://links.papareact.com/3pi"
            height={200}
            width={200}
            />
            <button 
            onClick={ authenticate}
            className="bg-yellow-300 rounded-lg p-5 font-bold  animate-pulse">Metaverse Media Login</button>
            </div>

            <div className="w-full h-screen ">
            <Image
            src="https://raw.githubusercontent.com/hiverkiya/Metaverse-Media/d788b57e7847aa4d9dcc931029e5d678b50c0d87/metaverse-media/media/bg.jpg"
            layout="fill"
            objectFit="cover"
            
            />
            </div>
        </div>
    )
}

export default Login
