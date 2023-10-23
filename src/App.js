import React from "react";
import Article from "./Article";
import Comment from "./Comment";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Comment />
    </div>
  );
}
function Navbar() {
  return (
    <div id="navbar">
      <h2><u>I'm a link</u></h2>
    </div>
  );
}

function Home() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

export default App;
