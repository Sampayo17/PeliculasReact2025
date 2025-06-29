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

const rutas = [
  /*Rutas genero*/
  { path: "/generos/create", element: CreateGenero },
  { path: "/generos/update", element: UpdateGenero },
  { path: "/generos", element: IndiceGeneros },

  /*Rutas actores*/
  { path: "/actores", element: IndexActores },
  { path: "/actores/create", element: CreateActores },
  { path: "/actores/update", element: UpdateActores },

  /*Rutas cines*/
  { path: "/cines", element: IndexCines },
  { path: "/cines/create", element: CreateCines },
  { path: "/cines/update", element: UpdateCines },

   /*Rutas peliculas*/
  { path: "/create/pelicula", element: CreatePelicula },
  { path: "/update/pelicula", element: UpdatePelicula },
  { path: "/search/pelicula", element: SearchPeliculas },

    /*Ruta home*/
  { path: "/", element: LandingPage },
];

export default rutas;
