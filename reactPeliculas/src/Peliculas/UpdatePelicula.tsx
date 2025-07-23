import PeliculasForm from "./PeliculasForm";

export default function UpdatePelicula() {
  return (
    <>
      <h3 className="text-amber-50">Editar Pelicula</h3>

      <PeliculasForm
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
