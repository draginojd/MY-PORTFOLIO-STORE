import './App.css';
import axios from "axios";

function App() {
  const sendPostRequest = async () => {
    try {
      const response = await axios.post("http://localhost:4000");
      console.log(response.data);
    } catch (error) {
      console.error("There was and ERROR!" , error);
    }
  };

  return (
    <div className="App">
    <header className="App-header">
    
    <button onClick={sendPostRequest}>Send POST Request</button>
    
      </header>
    </div> 
  );
}

export default App;
