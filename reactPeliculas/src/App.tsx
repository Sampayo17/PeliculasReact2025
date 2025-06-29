//rfc crear componente mas rapido
import "./App.css";
import Menu from "./Utils/Menu";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import IndiceGeneros from "./Generos/IndiceGeneros";
import LandingPage from "./LandingPage";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>

            <Route path="/generos" element={<IndiceGeneros />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
