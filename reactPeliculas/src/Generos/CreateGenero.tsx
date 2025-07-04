import GenericForm from "../Utils/GenericForm";

export default function CreateGenero() {
  // const navigate = useNavigate();
  return (
    <>
      <h1 className="text-amber-50">Crear Género</h1>

      <GenericForm
        model={{ nombre: "" }}
        onSubmit={async (model) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(model.nombre);
        }}
      />
    </>
  );
}
