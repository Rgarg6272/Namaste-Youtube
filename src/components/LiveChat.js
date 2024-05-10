import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMsg, setLiveMsg] = useState("");
  const showMessage = useSelector((store) => store.chat.messages);
  // console.log(showMessage);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] m-3 mt-0 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {showMessage.map((message, index) => (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))}
        </div>
      </div>
      <div>
        <form
          className="w-full p-2 ml-[0.8rem] mt-[-8px] border border-black"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({ name: "Raj Garg", message: liveMsg }));
            setLiveMsg("");
          }}
        >
          <input
            className="px-2 w-80"
            type="text"
            value={liveMsg}
            onChange={(e) => setLiveMsg(e.target.value)}
          />
          <button className="px-2 mx-2 bg-green-100">Send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
