import React, { useState } from 'react';
import events from './EventList';
import './GeminiChat.css';

const GEMINI_API_URL = '<GEMINI_API_URL>';
const GEMINI_API_KEY = '<GEMINI_API_KEY>';

const GeminiChat = ({ viewMode }) => {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! How can I help?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const eventNames = events.map(e => e.name).join(', ');
  const context = viewMode
    ? `The user is viewing the event list. The available events are: ${eventNames}.`
    : `The user is viewing the event map.`;

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{
                text: `You are an AI assistant for the Event Horizon app. ${context}\n\nUser: ${input}`
              }]
            }
          ],
        }),
      });
      const data = await res.json();
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not understand.';
      setMessages((msgs) => [...msgs, { sender: 'ai', text: aiText }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { sender: 'ai', text: 'Error connecting to Gemini API.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="gemini-chat-container">
      <div className="gemini-chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`gemini-chat-msg gemini-chat-msg-${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="gemini-chat-msg gemini-chat-msg-ai">Thinking...</div>}
      </div>
      <form className="gemini-chat-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()}>Send</button>
      </form>
    </div>
  );
};

export default GeminiChat;
