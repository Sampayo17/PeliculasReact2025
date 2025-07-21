import CineForm from "./CineForm";

export default function UpdateCines() {
  return (
    <>
      <h3 className="text-amber-50">Editar Cine</h3>
      <CineForm
        model={{
          nombre: "Lider",
          lat: 10.505197128335164,
          long: -66.91594362258913,
        }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
