import type { generoDTO } from "../Generos/generos.model";
import PeliculasForm from "./PeliculasForm";

export default function CreatePelicula() {
  const genero: generoDTO[] = [
    { id: 1, nombre: "accion" },
    { id: 2, nombre: "anime" },
    { id: 3, nombre: "guerra" },
  ];
  return (
    <>
      <h3 className="text-amber-50">Crear Pelicula</h3>
      <PeliculasForm
        generoNoSeleccionado={genero}
        generoSeleccionado={[]}
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
