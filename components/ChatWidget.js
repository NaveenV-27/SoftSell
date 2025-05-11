"use client";
import { useState } from 'react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi! Choose a question below:', sender: 'bot' }
  ]);

  const mockQA = {
    'How do I sell my license?':
      'To sell your license, go to the dashboard > licenses > "Sell License" button.',
    'How do I reset my password?':
      'Click on "Forgot password?" on the login page and follow the instructions.',
    'What payment methods do you accept?':
      'We accept credit cards, PayPal, and Google Pay.',
    'Can I transfer a license?':
      'Yes, licenses can be transferred from your dashboard > license settings.',
  };

  const handleMockClick = (question) => {
    setMessages((prev) => [
      ...prev,
      { text: question, sender: 'user' },
      { text: mockQA[question] || "Sorry, I don't understand.", sender: 'bot' }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="bg-white w-80 shadow-xl rounded-xl flex flex-col border border-gray-300">
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-3 rounded-t-xl flex justify-between items-center">
            <h3 className="font-semibold">AI Chat</h3>
            <button onClick={() => setOpen(false)}>&times;</button>
          </div>

          <div className="p-4 space-y-2 h-64 overflow-y-auto bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm px-4 py-2 rounded-xl max-w-[80%] ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white self-end ml-auto'
                    : 'bg-gray-200 text-gray-800 self-start mr-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 bg-white border-t space-y-2 text-right">
            {Object.keys(mockQA).map((question) => (
              <button
                key={question}
                onClick={() => handleMockClick(question)}
                className="block w-full text-left text-sm text-blue-600 hover:underline"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-sky-500 text-white p-4 rounded-full shadow-lg hover:bg-sky-600 transition"
        >
          💬
        </button>
      )}
    </div>
  );
}
