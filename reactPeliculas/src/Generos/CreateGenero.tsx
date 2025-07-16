import GeneroForm from "./GeneroForm";

export default function CreateGenero() {
  // const navigate = useNavigate();
  return (
    <>
      <h1 className="text-amber-50">Crear Género</h1>
      <GeneroForm
        model={{ nombre: "" }}
        onSubmit={async (model) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(model.nombre);
        }}
      />
    </>
  );
}
