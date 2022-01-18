import {ByMoralis, useMoralis,useMoralisQuery} from "react-moralis";
function Messages() {
    const{user}=useMoralis();
    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis
                style={{marginLeft:'auto' ,marginRight:'auto'}}/>
            </div>
            <div>

            </div>
            <div>
            
            </div>
            <div className="text-center text-green-500 mt-5"><p> {user.getUsername()} Online </p></div>
        </div>
    );
}

export default Messages
