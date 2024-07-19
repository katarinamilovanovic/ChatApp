import { auth } from "../../lib/firebase"
import "./detail.css"


const Detail = () => {
    return (
      <div className='detail'>
        <div className="user">
            <img src="./avatar.png" alt="" />
            <h2>Jane Doe</h2>
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

            <button>Block User</button>

            <button className="logout" onClick={() => auth.signOut()}>Log out</button>


        </div>
      </div>
    ) 
  }
  
  export default Detail