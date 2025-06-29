import type { pelicula } from "./peliculas.models";
export default function PeliculaIndividual(props: peliculaIndividualprosp) {
  const { pelicula } = props;

  const construirLink = () => `/pelicula/${pelicula.id}`;
  return (
    // <div className={css.div}>
    <div className="mb-2 text-center">
      <a href={construirLink()}> </a>
      <img className=" w-56 h-80 m-2.5" src={pelicula.poster} alt="Poster"></img>
      <p className="h-11 text-[14px] font-bold text-white">
        <a className=" decoration-0" href={construirLink()}>{pelicula.titulo}</a>
      </p>
    </div>
  );
}

interface peliculaIndividualprosp {
  pelicula: pelicula;
}
