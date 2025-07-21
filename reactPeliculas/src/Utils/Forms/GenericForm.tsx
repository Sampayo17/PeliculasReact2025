import { Form, Formik, type FormikHelpers } from "formik";
import FormGroupText from "./FormGroupText";
import Button from "../Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import type { GeneroCreacionDTO } from "../../Generos/generos.model";

export default function GenericForm(props: formGroupTextprops) {
  const { model, onSubmit } = props;
  return (
    <Formik
      initialValues={{
        nombre: model.nombre,
      }}
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
              to="/Generos"
            >
              Cancelar
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

interface formGroupTextprops {
  model: GeneroCreacionDTO;
  onSubmit(
    model: GeneroCreacionDTO,
    accion: FormikHelpers<GeneroCreacionDTO>
  ): void;
}
