import CineForm from "./CineForm";

export default function CreateCines() {
  return (
    <>
      <h3 className="text-amber-50">Crear Cine</h3>
      <CineForm
        model={{ nombre: "" }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
