/** @format */

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/navbar";
import MainForm from "./components/mainform";
import { useState } from "react";
import About from "./components/about";
import Result from "./components/result";

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [result,setResult] = useState(null);

  const openAboutPage = ()=>{
    setIsAboutOpen(true);
  }
  const closeAboutPage = ()=>{
    setIsAboutOpen(false);
  }

  const openResultPage = (result)=>{
    setResult(result);
    setIsResultOpen(true)
  }
  const closeResultPage = ()=>{
    setResult(null);
    setIsResultOpen(false);
  }
  return (
    <>
      <ToastContainer
        autoClose={1000}
        position={toast.POSITION.BOTTOM_RIGHT}
        hideProgressBar
        theme="light"
      />
      <Navbar openAbout={openAboutPage} />
      {!isAboutOpen && !isResultOpen ? (
        <>
          <MainForm showResult={openResultPage}/>
        </>
      ) : isAboutOpen ? (
        <>
          <About closeAbout = {closeAboutPage}/>
        </>
      ) : (
        <>
          <Result result={result} closeResult = {closeResultPage}/>
        </>
      )}
    </>
  );
}

export default App;
