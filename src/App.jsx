import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import "./App.css";

function App() {
  const [category, setCategory] = useState('general');

  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/>
    </>
  );
}

export default App;
