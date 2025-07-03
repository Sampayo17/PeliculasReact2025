//rfc crear componente mas rapido
import "./App.css";
import Menu from "./Utils/Menu";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import rutas from "./route-config"; // Importa las rutas desde el archivo de configuración
import ValidationConfig from "./Utils/Validation";

ValidationConfig();

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className=" px-20 container">
          <Routes>
            {/* Mapeo de rutas desde el archivo de configuración */}
              {rutas.map(rutas => (
                <Route
                  key={rutas.path}
                  path={rutas.path}
                  element={<rutas.element />}
                />
              ))}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
