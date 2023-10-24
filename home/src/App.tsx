import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const url = "http://localhost:8000/v1/preregisters";
    axios.get(url).then((Response) => {
      console.log(Response.data);
    });
  });
  return <div className="App">Hello World</div>;
}

export default App;
