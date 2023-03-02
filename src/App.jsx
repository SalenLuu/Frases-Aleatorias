import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import phrases from "./data/phrases.json";
import SpacePhrases from "./components/SpacePhrases";
import arrows from "./assets/flechas.png";
import Author from "./components/Author";
import backgrounds from "./data/background.json";

function App() {
  const [phrase, setPhrase] = useState();
  const [background, setBackground] = useState();

  useEffect(() => {
    const index = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[index]);
    setBackground(backgrounds[index].wallpaper);
  });

  const handleClick = () => {
    let newIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[newIndex]);
    setBackground(backgrounds[newIndex].wallpaper);
  };

  document.body.style.backgroundImage = `url(${background})`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100%";

  return (
    <div className="App">
      {phrase ? <SpacePhrases phraseData={phrase} /> : "Loading"}
      <button onClick={handleClick} className="button">
        <i class="fa-solid fa-satellite"></i>
      </button>
      {phrase ? <Author phraseData={phrase} /> : "Loading"}
    </div>
  );
}

export default App;
