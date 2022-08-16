import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [joke, setJoke] = useState("...loading next joke");

  const generateJoke = async () => {
    const config = {
      headers: {
        accept: "application/json"
      }
    };
    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h3>Don't Laugh Challenge😁😁😁</h3>
        <div id="joke" className="joke">
          {joke}
        </div>
        <button id="jokeBtn" className="btn" onClick={generateJoke}>
          Get Another Joke
        </button>
      </div>
    </div>
  );
}
