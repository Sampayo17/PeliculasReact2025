import type { actorPeliculaDTO } from "../Actores/actores.model";
import type { cineDTO } from "../Cines/cines.model";
import type { generoDTO } from "../Generos/generos.model";
import PeliculasForm from "./PeliculasForm";

export default function UpdatePelicula() {
  const generoSelect: generoDTO[] = [
    { id: 1, nombre: "accion" },
    { id: 2, nombre: "anime" },
  ];

  const generoNoSelect: generoDTO[] = [{ id: 3, nombre: "guerra" }];

  const cineSelect: cineDTO[] = [
    { id: 1, nombre: "Sambil candelaria" },
    { id: 2, nombre: "CC Lider" },
  ];
  const cineNoSelect: cineDTO[] = [{ id: 1, nombre: "Sambil chacao" }];

  const actorSelect: actorPeliculaDTO[] = [
    {
      id: 1,
      nombre: "Scarlet",
      personaje: "",
      foto: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRkYo9f9DErkkYFi838FqKCaRoO-JoHyBsb0ycBCikMZXQEgWSYMk_4K9F1jocK1YWRp94Rq3-ddtcbK1Y",
    },
  ];
  return (
    <>
      <h3 className="text-amber-50">Editar Pelicula</h3>

      <PeliculasForm
        actorSeleccionado={actorSelect}
        generoSeleccionado={generoSelect}
        generoNoSeleccionado={generoNoSelect}
        cinesSeleccionados={cineSelect}
        cineNoSeleccionado={cineNoSelect}
        model={{
          titulo: "Mi primer amor",
          enCines: true,
          trailer: "URL",
          fechaLanzamiento: new Date("2025-01-01T00:00:00"),
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
