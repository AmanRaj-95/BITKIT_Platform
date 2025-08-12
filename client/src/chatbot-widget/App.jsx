import { useState, useRef, useEffect } from "react"; 
import { XMarkIcon, PlusIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { companyInfo } from "./companyInfo";

const App = () => {
  const [chatHistory, setChatHistory] = useState([
    { hideInChat: true, role: "model", text: companyInfo }
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const chatBodyRef = useRef();

  useEffect(() => {
    console.log("All Vite env vars:", import.meta.env);
    console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
  }, []);

  const sanitizeBotResponse = (text) => {
    if (!text) return "";
    return text
      .replace(/<p>(\s*<ul>.*?<\/ul>)<\/p>/gs, "$1")
      .replace(/<p>(\s*<ol>.*?<\/ol>)<\/p>/gs, "$1")
      .trim();
  };

  const generateBotResponse = async (history) => {
    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const apiUrl = import.meta.env.VITE_API_URL || "/fallback-endpoint";
    console.log("Sending POST to:", apiUrl);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: formattedHistory }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      let apiResponseText =
        data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()?.replace(/\*/g, "") ||
        "Sorry, I couldn’t understand that.";

      apiResponseText = sanitizeBotResponse(apiResponseText);

      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: apiResponseText },
      ]);
    } catch (error) {
      console.error("Error in generateBotResponse:", error);
      const userMessage = error.message.startsWith("HTTP ")
        ? "Oops, the API responded with an error."
        : "Something went wrong. Please try again.";
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: userMessage },
      ]);
    }
  };

  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  const handleNewConversation = () => {
    setChatHistory([{ hideInChat: true, role: "model", text: companyInfo }]);
  };

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""} ${darkTheme ? "dark" : ""}`}>
      {/* Floating Chatbot Toggle Button */}
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
        className="fixed bottom-8 right-9 h-14 w-14 flex items-center justify-center rounded-full shadow-lg hover:opacity-90 transition-all duration-200 ease-in-out z-50"
        style={{ backgroundColor: darkTheme ? "#333" : "#F73D93", color: "white" }}
        aria-label="Open chatbot"
      >
        {showChatbot ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <ChatbotIcon className="w-6 h-6" style={{ fill: darkTheme ? "#333" : "#F73D93" }} />
        )}
      </button>

      {/* Chatbot Window */}
      <div
        className={`fixed bottom-24 right-9 w-[420px] max-h-[calc(100vh-120px)] flex flex-col overflow-hidden rounded-xl shadow-lg transform origin-bottom-right transition-all ${
          showChatbot ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        } z-50 ${darkTheme ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        {/* Header */}
        <div
          className="flex justify-between items-center p-4 rounded-t-xl"
          style={{ backgroundColor: darkTheme ? "#333" : "#F73D93" }}
        >
          <div className="flex items-center gap-2">
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center`}
              style={{ backgroundColor: darkTheme ? "#444" : "white", color: darkTheme ? "white" : "#F73D93" }}
            >
              <ChatbotIcon className="fill-current w-6 h-6" style={{ fill: darkTheme ? "white" : "#F73D93" }} />
            </div>
            <h2 className="text-lg font-semibold text-white">BITKIT-AI</h2>
          </div>
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:opacity-80 transition"
              style={{ color: "white" }}
              aria-label="Toggle theme"
            >
              {darkTheme ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
            </button>
            {/* New Conversation Button */}
            <button
              onClick={handleNewConversation}
              className="text-white p-2 rounded-full hover:opacity-80 transition"
              aria-label="New conversation"
            >
              <PlusIcon className="w-6 h-6" />
            </button>
            {/* Close Chatbot Button */}
            <button
              onClick={() => setShowChatbot(false)}
              className="text-white p-2 rounded-full hover:opacity-80 transition"
              aria-label="Close chatbot"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          ref={chatBodyRef}
          className={`flex flex-col gap-5 h-[460px] overflow-y-auto p-6 mb-20 scrollbar-thin ${
            darkTheme ? "scrollbar-thumb-gray-700 scrollbar-track-gray-900" : ""
          }`}
        >
          <div className="flex gap-3 items-start">
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center`}
              style={{ backgroundColor: darkTheme ? "#444" : "white" }}
            >
              <ChatbotIcon className="w-6 h-6" style={{ fill: darkTheme ? "white" : "#F73D93" }} />
            </div>
            <p
              className="rounded-lg p-3"
              style={{
                backgroundColor: darkTheme ? "#444" : "#FDE6F0",
                color: darkTheme ? "white" : "black",
              }}
            >
              Hey there <br /> The chatbot can answer questions about Bitkit’s academics, buy/sell, forums, and sports, as well as general queries beyond Bitkit.
            </p>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Footer */}
        <div className={`absolute bottom-0 w-full p-4 rounded-b-xl shadow-inner ${darkTheme ? "bg-gray-800" : "bg-white"}`}>
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
