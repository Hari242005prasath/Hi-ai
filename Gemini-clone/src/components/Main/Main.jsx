import React, { useContext } from "react";
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../config/Context'

const Main = () => {
    const { input, setInput, onSent, messages, loading, error, startNewChat, recentChats } = useContext(Context);

    const handleSend = () => {
        if (!input.trim()) return;
        onSent(input);
        setInput("");
    };

    return (
        <div className="main">
            <div className="nav">
                <p>HP AI</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Hp.</span></p>
                    <p>How can I help you</p>
                </div>
                <div className="chat-history" style={{ minHeight: 200, marginBottom: 16 }}>
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={msg.sender === "user" ? "user-message" : "bot-message"}
                            style={{
                                textAlign: msg.sender === "user" ? "right" : "left",
                                color: msg.sender === "user" ? "#1976d2" : "#333",
                                margin: "8px 0"
                            }}
                        >
                            <strong>{msg.sender === "user" ? "You" : "Gemini"}:</strong> {msg.text}
                        </div>
                    ))}
                    {loading && <div>Gemini is typing...</div>}
                    {error && <div style={{ color: "red" }}>{error}</div>}
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Type here..."
                            onKeyDown={e => {
                                if (e.key === "Enter") handleSend();
                            }}
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img
                                onClick={handleSend}
                                src={assets.send_icon}
                                alt="Send"
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Hp Ai will display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main