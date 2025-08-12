import ChatbotIcon from "./ChatbotIcon";

// ✅ Sanitize incoming HTML to prevent invalid nesting
const sanitizeHTML = (html) => {
  if (!html) return "";
  return html
    .replace(/<p>\s*(<ul>)/g, "$1") // remove <p> before <ul>
    .replace(/(<\/ul>)\s*<\/p>/g, "$1") // remove </p> after </ul>
    .trim();
};

const ChatMessage = ({ chat }) => {
  if (chat.hideInChat) return null;

  return (
    <div
      className={`flex ${
        chat.role === "model" ? "items-start gap-3" : "flex-col items-end"
      }`}
    >
      {chat.role === "model" && <ChatbotIcon />}
      <div
        className={`p-3 rounded-lg text-sm max-w-[75%] break-words ${
          chat.role === "model"
            ? "bg-pink-200 text-black" // changed answer background to pink
            : "bg-pink-400 text-white" // changed question background to pink
        }`}
        style={{ whiteSpace: "pre-line" }}
        dangerouslySetInnerHTML={{ __html: sanitizeHTML(chat.text) }} // ✅ sanitize here
      />
    </div>
  );
};

export default ChatMessage;
