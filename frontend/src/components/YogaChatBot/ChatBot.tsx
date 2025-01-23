import { useState } from "react";
import send from "../../assets/chatbot/lets-icons_send-hor-fill.png";
import cancel from "../../assets/chatbot/cancel.png";
import axios from "axios";

interface ChatbotProps {
  onCancel: () => void;
}

const Chatbot = ({ onCancel }: ChatbotProps) => {
  const [messages, setMessages] = useState<{ role: string; text: string | JSX.Element }[]>([
    { role: "bot", text: "Hi! This is your yoga bot. How can I assist you?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", text: input }]);
      setInput("");

      // Show the typing indicator
      setIsTyping(true);

      try {
        // Send POST request to the correct API endpoint with payload
        const response = await axios.post(", {
          query: input, // Sending user input in the required payload structure
        });

        // Extract the bot's response and convert it to a list of steps
        const botResponse = response.data?.Response_text || "Sorry, I couldn't find an answer.";

        // Split the response into title and instructions
        const responseLines = botResponse.split("\n");
        const title = responseLines[0]; // First line as title
        const instructions = responseLines.slice(1); // Remaining lines as steps

        // Format the steps without internal numbering
        const formattedInstructions = instructions
          .map((line: string) => {
            if (line.trim()) {
              return `${line.trim()}`; // Just the line without adding internal numbering
            }
            return null;
          })
          .filter((step: string | null) => step !== null) // Remove null values (empty lines)
          .map((step: string, index: number) => (
            <p key={index}>{step}</p>
          ));

        setMessages((prev) => [
          ...prev,
          { role: "bot", text: <><h3>{title}</h3>{formattedInstructions}</> },
        ]);
      } catch (error) {
        console.error("Error while fetching response:", error);

        setMessages((prev) => [
          ...prev,
          { role: "bot", text: "Sorry, there was an issue with fetching the response." },
        ]);
      } finally {
        // Remove the typing indicator
        setIsTyping(false);
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-full border-[1px] border-[#19E5D1] rounded-[15px] shadow-lg bg-[#000]">
      <div className="p-4 text-white font-[500] font-spaceGrotesk text-[14px] leading-[21px] normal-case rounded-t-lg">
        Yoga Chat
        <button onClick={onCancel} className="float-right">
          <img src={cancel} alt="Cancel" />
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === "bot" ? "text-left" : "text-right"}`}>
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.role === "bot" ? "bg-[#193330] text-white" : "bg-[#282828] text-white"
              }`}
            >
              {typeof msg.text === "string" ? (
                <span>{msg.text}</span>
              ) : (
                msg.text
              )}
            </span>
          </div>
        ))}
        {isTyping && (
          <div className="mb-2 text-left">
            <span className="inline-block px-4 py-2 rounded-lg bg-[#193330] text-white">
              <span className="typing-animation">
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </span>
            </span>
          </div>
        )}
      </div>
      <div className="inline-flex items-center mb-5 relative mr-2 ml-2">
        <input
          type="text"
          className="w-[580px] p-2 border-[1px] border-[#617E7A] rounded-[15px] text-white bg-[#193330] pr-16"
          placeholder="Ask a question about yoga pose.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} className="absolute right-0 mr-4">
          <img src={send} alt="Send" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
