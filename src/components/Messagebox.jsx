import React, { useState } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";

const MessageBox = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return alert("Please type a message.");
    alert("Message sent successfully!");
    setMessage("");
    setOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg text-3xl z-50 transition-all"
      >
        {open ? <FaTimes /> : <FaComments />}
      </button>

      {/* Message Box */}
      <div
        className={`fixed bottom-24 right-6 w-72 bg-white p-4 rounded-xl shadow-2xl border z-50 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <h3 className="font-semibold text-lg text-blue-700 flex items-center gap-2">
          <IoChatbubblesOutline className="text-blue-600" /> Live Message
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          Send your query. We will reach out shortly.
        </p>

        {/* Textarea Input */}
        <div className="relative mt-3">
          <textarea
            className="w-full border rounded-lg p-3 pr-10 text-gray-700 focus:ring-2 focus:ring-blue-600 outline-none"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          ></textarea>

          <FaPaperPlane className="absolute right-3 bottom-3 text-gray-400 text-lg" />
        </div>

        {/* Buttons */}
        <button
          onClick={handleSend}
          className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow transition"
        >
          Send Message
        </button>

        {/* WhatsApp Option */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 w-full text-center block bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg shadow transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    </>
  );
};

export default MessageBox;
