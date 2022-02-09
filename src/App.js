import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#423F3E";
      showAlert("Dark mode successfully enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode successfully enabled.", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <div className="App">
        <Navbar title="TextUtils" mode={mode} onClick={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/"
                element={ */}
          <Form showAlert={showAlert} formtitle="Enter text to anayze" mode={mode} />
          {/* //     }
            //   />
            // </Routes> */}
        </div>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
