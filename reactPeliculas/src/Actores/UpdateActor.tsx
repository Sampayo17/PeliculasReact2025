import ActorForm from "./ActorForm";

export default function UpdateActores() {
  return (
    <>
      <h3 className="text-amber-50">Editar Actor</h3>
      <ActorForm
        model={{
          nombre: "Israel Sampayo",
          fechaNacimiento: new Date("1996-05-01T00:00:00"),
        }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
