import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
 
//import ReactDOM from "react-dom/client";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  )
}

export default App;
