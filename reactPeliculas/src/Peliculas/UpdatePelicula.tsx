import PeliculasForm from "./PeliculasForm";

export default function UpdatePelicula() {
  const generoSelect: generoDTO[] = [
    { id: 1, nombre: "accion" },
    { id: 2, nombre: "anime" },
  ];

  const generoNoSelect: generoDTO[] = [{ id: 1, nombre: "accion" }];
  return (
    <>
      <h3 className="text-amber-50">Editar Pelicula</h3>

      <PeliculasForm
        generoSeleccionado={generoSelect}
        generoNoSeleccionado={generoNoSelect}
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
