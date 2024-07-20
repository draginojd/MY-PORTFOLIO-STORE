
import './App.css';
import axios from 'axios';
import Navbar from "./Navbar";


function App() {
  const sendPostRequest = async () => {
    try {
      // Access the API URL from environment variables
      const apiUrl = process.env.REACT_APP_API_URL;

      // Send POST request using axios
      const response = await axios.post(`${apiUrl}/`); // Adjust endpoint as needed
      console.log(response.data);
    } catch (error) {
      console.error("There was an ERROR!", error);
    }
  };


  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <button onClick={sendPostRequest}>Send POST Request</button>
      </header>
    </div>
  );
}

export default App;
