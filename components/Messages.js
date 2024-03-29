import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Message from "./Message";
const MINS_DURATION = 15;
function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages", // Case sensitive
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    { live: true } //*showing chat for last 15 minutes here, Implementing real time listener
  );
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis style={{ marginLeft: "auto", marginRight: "auto" }} />
      </div>
      <div className="space-y-10 p-4 ">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-green-500 mt-5">
        <p> {user.getUsername()} Online </p>
      </div>
    </div>
  );
}

export default Messages;
