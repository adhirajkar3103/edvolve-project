import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import Hello from "./components/Hello";
import MainBody from "./components/MainBody";

function App() {
  let userName = 'Adhiraj Kar'
  return (
    <>
      <Topbar user={userName}/>
      <div className="ms-5 mt-3">
      <Hello user={userName}/>
      </div>
      <MainBody />
      
    </>
  );
}

export default App;
