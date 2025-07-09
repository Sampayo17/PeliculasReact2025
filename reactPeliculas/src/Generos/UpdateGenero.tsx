import { useParams } from "react-router-dom";
import GenericForm from "../Utils/GenericForm";

export default function UpdateGenero() {
  const { id }: any = useParams();
  return (
    <>
      {console.log(id)}
      <h3 className="text-amber-50">Editar Género</h3>
      <GenericForm
        model={{ nombre: "Peleas" }}
        onSubmit={async (model) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(model.nombre);
        }}
      />
    </>
  );
}
