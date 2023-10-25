import axios from "axios";
import { useEffect } from "react";

function GetAPI() {
  const url = "http://localhost:8000/v1/preregisters";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div>Hello World</div>;
}

export default GetAPI;
