import PeliculaIndividual from "./PeliculaIndividual";
import type { pelicula } from "./peliculas.models";
import ListadoGenerico from "../Utils/ListadoGenerico";

export default function ListadoPeliculas(props: listadoPeliculasprops) {
  const { peliculas } = props;

  return (
    <ListadoGenerico listado={peliculas}>
      <>
      <a className="text-amber-50" href="/pelicula/create">Crear Película</a>
        <div className="flex flex-lg-wrap flex-row align-items-center ">
          {peliculas?.map((pelicula) => (
            <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />
          ))}
        </div>
      </>
    </ListadoGenerico>
  );
}

interface listadoPeliculasprops {
  peliculas?: pelicula[];
}
