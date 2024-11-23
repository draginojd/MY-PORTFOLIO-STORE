const fs = require('fs');
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';
import React from 'react';

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
      <button onClick={sendPostRequest}>Send Post Request</button>
    </div>
  );
}

export default App;
