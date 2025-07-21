import { Form, Formik, type FormikHelpers } from "formik";
import type { createCineDTO } from "./cines.model";
import * as Yup from "yup";
import FormGroupText from "../Utils/Forms/FormGroupText";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import FormMap from "../Utils/Forms/FormMap";
import type { coordenadaDTO } from "../Utils/models/Coordenada.model";

export default function CineForm(props: cineFormprops) {
  const { model, onSubmit } = props;

  function transCoordernadas(): coordenadaDTO[] | undefined {
    if (model.lat && model.long) {
      const response: coordenadaDTO = {
        latitud: model.lat,
        longitud: model.long,
      };
      return [response];
    }

    return undefined;
  }

  return (
    <Formik
      initialValues={model}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("El campo es requerido")
          .firstLetterUpCasse(),
      })}
    >
      {(formikProps) => (
        <Form className="flex flex-col pt-2 text-amber-50">
          <FormGroupText campo="nombre" label="Nombre" />
          <div className="my-10">
            <FormMap
              campoLat="latitud"
              campoLon="longitud"
              coordenadasValue={transCoordernadas()}
            />
          </div>

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
              to="/Cines"
            >
              Cancelar
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

interface cineFormprops {
  model: createCineDTO;
  onSubmit(
    valores: createCineDTO,
    acciones: FormikHelpers<createCineDTO>
  ): void;
}
