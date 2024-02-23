import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landingpage/Landing";
import FormPage from "./pages/formPage/FormPage";
import Product from "./pages/productPage/Product";
import { OptionProvider } from "./context/OptionContext";

function App() {
  return (
    // <div className="App">
    //   <Landing />
    // </div>
    <>
      <Router>
        <OptionProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/formpage" element={<FormPage />} />
            <Route path="/productpage" element={<Product />} />
          </Routes>
        </OptionProvider>
      </Router>
    </>
  );
}

export default App;
