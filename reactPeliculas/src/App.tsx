//rfc crear componente mas rapido
import "./App.css";
import Menu from "./Utils/Menu";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import rutas from "./route-config"; // Importa las rutas desde el archivo de configuración

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className="p-4 m-1 container">
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
