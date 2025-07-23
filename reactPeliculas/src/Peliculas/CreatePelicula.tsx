import PeliculasForm from "./PeliculasForm";

export default function CreatePelicula() {
  return (
    <>
      <h3 className="text-amber-50">Crear Pelicula</h3>
      <PeliculasForm
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
