import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-black px-8 py-4 flex justify-center shadow-lg rounded-b-2xl border-b-4 border-blue-900">
      <div className="flex space-x-10 bg-white/10 backdrop-blur-md px-8 py-2 rounded-full shadow-md">
        <NavLink
          className="text-gray-200 text-2xl max-sm:text-[10px]  font-extrabold tracking-wide hover:text-blue-300 hover:scale-110 transition-all duration-200"
          to="/"
        > React Peliculas </NavLink>

        <NavLink
          className="text-gray-200 text-2 max-sm:text-[10px]  text-center  tracking-wide hover:text-blue-300 hover:scale-110 transition-all duration-200"
          to="/generos"
        >  Generos </NavLink>
      
        <NavLink
          className="text-gray-200 text-2 max-sm:text-[10px]  text-center  tracking-wide hover:text-blue-300 hover:scale-110 transition-all duration-200"
          to="/actores"
        >Actores </NavLink>

        <NavLink
          className="text-gray-200 text-2 max-sm:text-[10px]  text-center  tracking-wide hover:text-blue-300 hover:scale-110 transition-all duration-200"
          to="/cines"
        > Cines </NavLink>

        <NavLink
          className="text-gray-200 text-2 max-sm:text-[10px]  text-center  tracking-wide hover:text-blue-300 hover:scale-110 transition-all duration-200"
          to="/search/pelicula"
        > Buscar Peliculas </NavLink>
      </div>
    </nav>
  );
}
