import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landingpage/Landing";
import FormPage from "./pages/formPage/FormPage";

function App() {
  return (
    // <div className="App">
    //   <Landing />
    // </div>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/formpage" element={<FormPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
