import { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
      },
      {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json',
        },
      }
    );

    const botMessage = response.data.choices[0].message.content;
    setMessages([...messages, { text: input, isUser: true }, { text: botMessage, isUser: false }]);
    setInput('');
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.isUser ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Xabar yozing..."
        />
        <button onClick={handleSend}>Yuborish</button>
      </div>
    </div>
  );
};

export default Chatbot;