import { createContext, useState } from "react";
import runChat from "../config/ai";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recentChats, setRecentChats] = useState([]);

    const onSent = async (prompt) => {
        setLoading(true);
        setError(null);
        setMessages(prev => [...prev, { sender: "user", text: prompt }]);
        try {
            const shortPrompt = prompt + "\n\nPlease answer in 3-7 meaningful sentences.";
            const result = await runChat(shortPrompt);
            setMessages(prev => [...prev, { sender: "bot", text: result }]);
        } catch (err) {
            setError("Failed to get response from Gemini.");
        } finally {
            setLoading(false);
        }
    };

    const saveCurrentChat = () => {
        if (messages.length > 0) {
            setRecentChats(prev => [...prev, messages]);
            setMessages([]);
            setInput("");
        }
    };

    const startNewChat = () => {
        if (messages.length > 0) {
            // Only store non-empty chats
            setRecentChats(prev => [...prev, [...messages]]);
        }
        setMessages([]);
        setInput("");
    };

    const loadChat = (chatIndex) => {
        // Store current chat if it's not empty
        if (messages.length > 0) {
            setRecentChats(prev => [...prev, [...messages]]);
        }
        // Load the selected chat
        setMessages([...recentChats[chatIndex]]);
        setInput("");
    };

    const contextValue = {
        input,
        setInput,
        messages,
        setMessages,
        loading,
        error,
        onSent,
        recentChats,
        saveCurrentChat,
        startNewChat,
        loadChat,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;