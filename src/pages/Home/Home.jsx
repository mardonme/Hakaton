import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Chatbot from '../../components/Chatbot/Chatbot';
import HRPanel from '../../components/HRpanel/HRpanel';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-content">
        <h1>Kubosoft Platformasiga Xush Kelibsiz!</h1>
        <Chatbot />
        <HRPanel />
      </div>
    </div>
  );
};

export default Home;