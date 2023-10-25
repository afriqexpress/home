import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function GetAPI() {
  const [quote, setQuote] = useState("");
  const url = "http://api.quotable.io/random";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.content);
        setQuote(response.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div>{quote ? <p>{quote}</p> : null}</div>;
}

export default GetAPI;
