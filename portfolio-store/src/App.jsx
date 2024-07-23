import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';
import LandingPage from './LandingPage';

function App() {
  const sendPostRequest = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/`);
      console.log(response.data);
    } catch (error) {
      console.error('There was an ERROR!', error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <LandingPage />

    </div>
  );
}

export default App;
