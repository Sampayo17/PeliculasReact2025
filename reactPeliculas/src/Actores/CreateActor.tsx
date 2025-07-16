import ActorForm from "./ActorForm";
export default function CreateActores() {
  return (
    <>
      <h3 className="text-amber-50">Crear Actor</h3>
      <ActorForm
        model={{
          nombre: "",
          fechaNacimiento: undefined,
        }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
