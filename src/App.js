import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
  );
};
export default App;
