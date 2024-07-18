
import './App.css';
import axios from 'axios';
import Navbar from "./Navbar";

function App() {
  const sendPostRequest = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/`);
      console.log(response.data);
    } catch (error) {
      console.error("There was and ERROR!" , error);
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
