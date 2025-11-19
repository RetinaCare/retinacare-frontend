import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Auto-scroll ref
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your RetinaCare assistant. I can help explain your prediction results or answer general questions about diabetic retinopathy.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // 1. Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // 2. Simulate Bot Response (Replace this with actual AI API call later)
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "I see. Based on the image provided, the model looks for microaneurysms and hemorrhages. Would you like to know more about the risk factors?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-blue-700 p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm leading-tight">
                  RetinaCare AI
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-sky-100">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-200">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.sender === "user"
                      ? "bg-sky-100 text-sky-600"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <User size={14} />
                  ) : (
                    <Bot size={14} />
                  )}
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-sm shadow-sm ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-tr-none"
                      : "bg-white border border-slate-200 text-slate-700 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                  <p
                    className={`text-[10px] mt-1 opacity-70 ${
                      msg.sender === "user" ? "text-sky-100" : "text-slate-400"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Bot size={14} />
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                  <span
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></span>
                  <span
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></span>
                  <span
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-slate-100 flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 bg-slate-100 border-transparent focus:bg-white border focus:border-sky-500 rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-sky-100 outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="bg-blue-700 text-white p-2.5 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
            w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300
            ${
              isOpen
                ? "bg-gray-700 rotate-90"
                : "bg-blue-700 hover:bg-blue-600 hover:scale-105 hover:shadow-sky-500/30"
            }
            text-white
        `}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={26} />}
      </button>
    </div>
  );
};
export default ChatBox;
