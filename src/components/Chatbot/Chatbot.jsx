import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.scss';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return; // Bo'sh xabar yubormaslik uchun

    // Foydalanuvchi xabarini chatga qo'shish
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, isUser: true },
    ]);

    // API so'rovini yuborish
    const options = {
      method: 'POST',
      url: 'https://chatgpt-42.p.rapidapi.com/o3mini',
      headers: {
        'x-rapidapi-key': 'abd7c23c02msh9eae11004e49a98p1af127jsna81e2115d371', // RapidAPI kalitingiz
        'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        messages: [
          {
            role: 'user',
            content: input, // Foydalanuvchi xabari
          },
        ],
        web_access: false,
      },
    };

    try {
      const response = await axios.request(options);
      const botMessage = response.data.result; // Bot javobi

      // Bot javobini chatga qo'shish
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botMessage, isUser: false },
      ]);
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
      // Xatolikni foydalanuvchiga ko'rsatish
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Xatolik yuz berdi. Iltimos, keyinroq urunib ko\'ring.', isUser: false },
      ]);
    } finally {
      setInput(''); // Input maydonini tozalash
    }
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.isUser ? 'user-message' : 'bot-message'}
          >
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
          onKeyPress={(e) => e.key === 'Enter' && handleSend()} // Enter bosganda xabar yuborish
        />
        <button onClick={handleSend}>Yuborish</button>
      </div>
    </div>
  );
};

export default Chatbot;