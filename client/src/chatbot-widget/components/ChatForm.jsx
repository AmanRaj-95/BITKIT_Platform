import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory((prev) => [...prev, { role: "user", text: message }]);
    setMessage("");

    // Add placeholder while bot "thinks"
    setChatHistory((prev) => [...prev, { role: "model", text: "Thinking..." }]);
    generateBotResponse([...chatHistory, { role: "user", text: message }]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 w-full"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F73D93]"
      />
      <button
        type="submit"
        className="bg-[#F73D93] hover:bg-[#d8317e] text-white p-2 rounded-full transition-colors"
      >
        <PaperAirplaneIcon className="w-5 h-5 rotate-45" />
      </button>
    </form>
  );
};

export default ChatForm;
