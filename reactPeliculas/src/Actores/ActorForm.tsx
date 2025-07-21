import { Form, Formik, type FormikHelpers } from "formik";
import type { actoresCreationDTO } from "./actores.model";
import { Link } from "react-router-dom";
import FormGroupText from "../Utils/Forms/FormGroupText";
import Button from "../Utils/Button";
import * as Yup from "yup";
import FormGroupDate from "../Utils/Forms/FormGroupDate";
import FormGroupImg from "../Utils/Forms/FormGroupImg";
import FormGruopMarkDown from "../Utils/Forms/FormGruopMarkDown";

export default function ActorForm(props: actorFormProps) {
  const { model, onSubmit } = props;

  return (
    <Formik
      initialValues={model}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .firstLetterUpCasse(),
      })}
    >
      {(formikProps) => (
        <Form className="flex flex-col pt-2 text-amber-50">
          <FormGroupText campo="nombre" label="Nombre" />
          <FormGroupDate campo="fechaNacimiento" label="Fecha Nacimiento" />
          <FormGroupImg campo="imagen" label="Imagen" imgUrl={model.imgURL} />
          <FormGruopMarkDown campo="biografia" label="Biografia" />

          <div className="flex pt-2">
            <Button
              typeBtn="Success"
              disabled={formikProps.isSubmitting}
              type="submit"
            >
              Salvar
            </Button>
            <Link
              className="bg-red-500 text-white ml-3 px-4 py-2 rounded hover:bg-red-700 transition duration-200"
              to="/Actores"
            >
              Cancelar
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

interface actorFormProps {
  model: actoresCreationDTO;
  onSubmit(
    valores: actoresCreationDTO,
    acciones: FormikHelpers<actoresCreationDTO>
  ): void;
}
