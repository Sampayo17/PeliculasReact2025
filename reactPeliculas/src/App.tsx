//rfc crear componente mas rapido
import "./App.css";
import { RouterProvider } from "react-router-dom";
import rutas from "./route-config"; // Importa las rutas desde el archivo de configuración
import ValidationConfig from "./Utils/Validation";

ValidationConfig();

function App() {
  return (
    <>
      <div className="px-20 container">
        {/* Aquí puedes agregar un componente de menú si es necesario */}
        <RouterProvider router={rutas} />
      </div>

      {/* Esta es una forma antigua, ahora con la version 6.4+ esto no funciona del todo 
      <Router>
        <Menu />
        <div className=" px-20 container">
          <Routes>
            {// Mapeo de rutas desde el archivo de configuración}
            {rutas.map((rutas) => (
              <Route
                key={rutas.path}
                path={rutas.path}
                element={<rutas.element />}
              />
            ))}
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
