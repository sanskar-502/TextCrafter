import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Aboutt from "./components/Aboutt";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Importing Router components

function App() {
  const [mode, setMode] = useState("light"); // Theme mode: light/dark
  const [alert, setAlert] = useState(null);  // Alert state

  // Show alert message for 1.5 seconds
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Toggle light/dark mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "Success");
      document.title = "TextCrafter - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "Success");
      document.title = "TextCrafter - Light Mode";
    }
  };

  return (
    <Router> {/* Wrapping everything in Router */}
      <Navbar title="TextCrafter" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      <div className="container my-3">
        {/* Setting up routes for Home and About pages */}
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<Aboutt mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
