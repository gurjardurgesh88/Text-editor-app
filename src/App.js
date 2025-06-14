import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const handleThemeChange = (color) => {
    setMode("light");
    document.body.style.backgroundColor = color;
    showAlert("light theme applied!", "success");
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "success");
      document.title = "Textutiles - Dark Mode ";
     
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = "Textutiles - Light Mode ";
    }
  };
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar
          title="Textutiles"
          mode={mode}
          toggleMode={toggleMode}
          onThemeChange={handleThemeChange}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
            <Route
              path="/Text-editor-app"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
          
}

export default App;
