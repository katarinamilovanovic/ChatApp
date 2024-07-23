import { useChatStore } from "../../lib/chatStore"
import { auth, db} from "../../lib/firebase"
import { useUserStore } from "../../lib/userStore";
import "./detail.css"
import {doc, updateDoc, arrayRemove, arrayUnion} from "firebase/firestore";


const Detail = () => {

    const {resetChat, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock} = useChatStore();
    const {currentUser} = useUserStore();

    const handleLogout = () => {
        auth.signOut();
        resetChat()
    };

    const handleBlock = async ()=>{
        if(!user) return;

        const userDocRef = doc(db, "users", currentUser.id)

        try {

            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id)
            });

            changeBlock();
            
        } catch (err) {
            console.log(err);
        }

    }

    return (
      <div className='detail'>
        <div className="user">
            <img src={user?.avatar || "./avatar.png"} alt="" />
            <h2>{user?.username}</h2>
            <p>Lorem ipsum dolor sit amet consec</p>
        </div>
        <div className="info">
            <div className="option">
                <div className="title">
                    <span>Chat settings</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Privacy & help</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Shared photos</span>
                    <img src="./arrowDown.png" alt="" />
                </div>
                <div className="photos">
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="./avatar.png" alt="" />
                            <span>photo 2020.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon"/>
                    </div>

                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="./avatar.png" alt="" />
                            <span>photo 2020.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon"/>
                    </div>

                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="./avatar.png" alt="" />
                            <span>photo 2020.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon"/>
                    </div>

                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="./avatar.png" alt="" />
                            <span>photo 2020.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon"/>
                    </div>
                </div>
            </div>


            <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <button onClick={handleBlock}>{
                isCurrentUserBlocked ? "You are blocked" : isReceiverBlocked ? "User Blocked" : "Block User"
                }
            </button>

            <button className="logout" onClick={handleLogout}>Log out</button>


        </div>
      </div>
    ) 
  }
  
  export default Detail