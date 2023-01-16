import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";
import logo from "./logo.svg";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </React.StrictMode>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
