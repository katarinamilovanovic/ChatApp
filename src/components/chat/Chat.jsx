import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";


const Chat = () => {
    const[open, setOpen] = useState(false);
    const[chat, setChat] = useState();
    const[text, setText] = useState("");

    const {chatId} = useChatStore();

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({behaviour: "smooth"});
    },[]);

    useEffect(() => {
        const onSub = onSnapshot(doc(db, "chats", chatId), (res) => {
            setChat(res.data());
        });

        return()=>{
            onSub();
        };

    },[chatId]);


    const handleEmoji = (e) =>{
        setText((prev) => prev + e.emoji);
        setOpen(false)
    };

    return (
      <div className='chat'>
        <div className="top">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="icons">
                <img src="./phone.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./info.png" alt="" />
            </div>
        </div>


        <div className="center">
           {chat?.messages?.map((message) => (

           
            <div className="message own" key={message?.createAt}>
                <div className="texts">
                    {message.img && 
                    <img src={message.img} alt="" />}
                    <p>{message.text}</p>
                   {/* <span>{message}</span>*/}
                </div>
            </div> 
            ))}
            <div ref = {endRef}></div>
        </div>



        <div className="bottom">
            <div className="icons">
                <img src="./img.png" alt="" />
                <img src="./camera.png" alt="" />
                <img src="./mic.png" alt="" />
            </div>
            <input 
                type="text" 
                placeholder="Type a message..." 
                value={text}
                onChange={e => setText(e.target.value)}/>
            <div className="emoji">
                <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
                <div className="picker">
                    <EmojiPicker open = {open} onEmojiClick={handleEmoji}/>
                </div> 
            </div>
            <button className="sendButton">Send</button>
        </div>
      </div>
    ) 
  }
  
  export default Chat