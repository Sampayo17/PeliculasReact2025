import { Form, Formik, type FormikHelpers } from "formik";
import type { peliculaCreationDTO } from "./peliculas.models";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import FormGroupText from "../Utils/Forms/FormGroupText";
import FormGroupCheckBox from "../Utils/Forms/FormGroupCheckBox";
import FormGroupDate from "../Utils/Forms/FormGroupDate";
import FormGroupImg from "../Utils/Forms/FormGroupImg";
import Button from "../Utils/Button";
import MultiSelector, { type multiSelectorModel } from "../Utils/MultiSelector";
import type { generoDTO } from "../Generos/generos.model";
import { useState } from "react";

export default function PeliculasForm(props: peliculasFormprops) {
  const { model, onSubmit, generoNoSeleccionado, generoSeleccionado } = props;

  const [selectGenero, setSelectGenero] = useState(maping(generoSeleccionado));

  const [noSelectGenero, setNoSelectGenero] = useState(
    maping(generoNoSeleccionado)
  );

  function maping(
    arreglo: { id: number; nombre: string }[]
  ): multiSelectorModel[] {
    return arreglo.map((valor) => {
      return { llave: valor.id, valor: valor.nombre };
    });
  }

  return (
    <>
      <Formik
        initialValues={model}
        onSubmit={(valores, acciones) => {
          valores.generosIds = generoSeleccionado.map((valor) => valor.id);
          onSubmit(valores, acciones);
        }}
        validationSchema={Yup.object({
          titulo: Yup.string()
            .required("Este campo es requerido")
            .firstLetterUpCasse(),
        })}
      >
        {(formikProps) => (
          <Form>
            <FormGroupText campo="titulo" label="Titulo" />
            <FormGroupCheckBox campo="enCines" label="En cines" />
            <FormGroupText campo="trailer" label="Trailer" />
            <FormGroupDate
              campo="fechaLanzamiento"
              label="Fecha de lanzamiento"
            />
            <FormGroupImg
              campo="poster"
              label="Poster"
              imgUrl={model.posterURL}
            />

            <MultiSelector
              seleccionados={selectGenero}
              noSeleccionados={noSelectGenero}
              onChange={(seleccionados, noSeleccionados) => {
                setSelectGenero(seleccionados);
                setNoSelectGenero(noSeleccionados);
              }}
            />

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
                to="/"
              >
                Cancelar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface peliculasFormprops {
  model: peliculaCreationDTO;
  onSubmit(
    values: peliculaCreationDTO,
    actions: FormikHelpers<peliculaCreationDTO>
  ): void;

  generoSeleccionado: generoDTO[];
  generoNoSeleccionado: generoDTO[];
}
