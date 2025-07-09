import LandingPage from "./LandingPage";
import IndiceGeneros from "./Generos/IndiceGeneros";
import CreateGenero from "./Generos/CreateGenero";
import UpdateGenero from "./Generos/UpdateGenero";
import UpdateActores from "./Actores/UpdateActor";
import CreateActores from "./Actores/CreateActor";
import IndexActores from "./Actores/IndexActores";
import UpdateCines from "./Cines/UpdateCine";
import IndexCines from "./Cines/IndexCines";
import CreateCines from "./Cines/CreateCine";
import CreatePelicula from "./Peliculas/CreatePelicula";
import UpdatePelicula from "./Peliculas/UpdatePelicula";
import SearchPeliculas from "./Peliculas/SearchPeliculas";
import RedirectionLandinPage from "./Utils/RedirectionLandinPage";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./MainLayout";

const rutas = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />, // Componente principal que contiene el layout
      children: [
        /*Rutas genero*/
        { path: "generos/create", element: <CreateGenero /> },
        { path: "/generos/update/:id", element: <UpdateGenero /> },
        { path: "generos", element: <IndiceGeneros /> },

        /*Rutas actores*/
        { path: "actores", element: <IndexActores /> },
        { path: "actores/create", element: <CreateActores /> },
        { path: "actores/update/:id", element: <UpdateActores /> },

        /*Rutas cines*/
        { path: "cines", element: <IndexCines /> },
        { path: "cines/create", element: <CreateCines /> },
        { path: "cines/update/:id", element: <UpdateCines /> },

        /*Rutas peliculas*/
        { path: "peliculas/create", element: <CreatePelicula /> },
        { path: "peliculas/update/:id", element: <UpdatePelicula /> },
        { path: "peliculas/search", element: <SearchPeliculas /> },

        /*Ruta home*/
        { path: "", element: <LandingPage /> },
        /* Redireccion Error 404*/
        { path: "*", element: <RedirectionLandinPage /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

export default rutas;
