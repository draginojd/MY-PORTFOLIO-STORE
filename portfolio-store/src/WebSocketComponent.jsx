// src/WebSocketComponent.jsx
import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Access the WebSocket URL from the environment variable
    const socketUrl = process.env.REACT_APP_WEBSOCKET_URL;

    // Ensure the URL is defined
    if (!socketUrl) {
      console.error('WebSocket URL is not defined');
      setError('WebSocket URL is not defined');
      return;
    }

    // Create a new WebSocket connection
    const socket = new WebSocket(socketUrl);

    // Handle incoming messages
    socket.onmessage = (event) => {
      setMessage(event.data);
    };

    // Handle WebSocket errors
    socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
      setError('An error occurred with the WebSocket connection.');
    };

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h2>WebSocket Messages</h2>
      {error && <p>Error: {error}</p>}
      <p>{message}</p>
    </div>
  );
};

export default WebSocketComponent;
