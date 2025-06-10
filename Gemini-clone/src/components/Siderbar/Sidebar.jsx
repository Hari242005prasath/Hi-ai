import React, { useContext, useState } from 'react' 
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../config/Context'

const Sidebar = () => {
    const [extended,setExtended] = useState(false)
    const { startNewChat, recentChats, loadChat } = useContext(Context)

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" onClick={startNewChat} style={{ cursor: "pointer" }} />
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended && (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {recentChats.map((chat, index) => (
                            <div 
                                key={index} 
                                className="recent-entry"
                                onClick={() => loadChat(index)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={assets.message_icon} alt="" />
                                <p>{chat[0]?.text?.slice(0, 30)}...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Setting</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar