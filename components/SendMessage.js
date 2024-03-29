import { useState } from "react";
import { useMoralis } from "react-moralis";
function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {}, // The object was saved successfully
        (error) => {
          console.log(error.message); // The save failed, Error is a Moralis.Error with an error code and message
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-200">
      <input
        className="pr-5 flex-grow outline-none bg-transparent text-white placeholder-gray-500"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder={`Enter a Message ${user.getUsername()}`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
