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
      const [key, value] = line.split('=');
      if (key && value) {
        process.env[key.trim()] = value.trim();
      }
    }
  });
} else {
  console.error(`Environment file not found at ${externalEnvPath}`);
  process.exit(1);
}
1~
// test-read-env.js
const fs = require('fs');
const path = require('path');

// Correct path to the external .env file
const externalEnvPath = path.resolve('/environments/portfolio-store-env/.env');

// Read the external .env file
fs.readFile(externalEnvPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
