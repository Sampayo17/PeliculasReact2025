import type { cineDTO } from "../Cines/cines.model";
import type { generoDTO } from "../Generos/generos.model";
import PeliculasForm from "./PeliculasForm";

export default function CreatePelicula() {
  const genero: generoDTO[] = [
    { id: 1, nombre: "accion" },
    { id: 2, nombre: "anime" },
    { id: 3, nombre: "guerra" },
  ];

  const cineSelect: cineDTO[] = [
    { id: 1, nombre: "Sambil candelaria" },
    { id: 1, nombre: "CC Lider" },
  ];

  return (
    <>
      <h3 className="text-amber-50">Crear Pelicula</h3>
      <PeliculasForm
        actorSeleccionado={[]}
        generoNoSeleccionado={genero}
        generoSeleccionado={[]}
        cineNoSeleccionado={cineSelect}
        cinesSeleccionados={[]}
        model={{
          titulo: "",
          enCines: false,
          trailer: "",
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
