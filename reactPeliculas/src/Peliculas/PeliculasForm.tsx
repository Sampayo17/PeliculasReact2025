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
import type { cineDTO } from "../Cines/cines.model";
import TypeAheadActores from "../Actores/TypeAheadActores";
import type { actorPeliculaDTO } from "../Actores/actores.model";

export default function PeliculasForm(props: peliculasFormprops) {
  const {
    model,
    onSubmit,
    generoNoSeleccionado,
    generoSeleccionado,
    cineNoSeleccionado,
    cinesSeleccionados,
    actorSeleccionado,
  } = props;

  /*Generos */
  const [selectGenero, setSelectGenero] = useState(maping(generoSeleccionado));
  const [noSelectGenero, setNoSelectGenero] = useState(
    maping(generoNoSeleccionado)
  );

  /*Cines */
  const [selectCine, setSelectCine] = useState(maping(cinesSeleccionados));
  const [noSelectCine, setNoSelectCine] = useState(maping(cineNoSeleccionado));

  const [actorSelect, setActorSelect] =
    useState<actorPeliculaDTO[]>(actorSeleccionado);

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
          valores.generosIds = selectGenero.map((valor) => valor.llave);
          valores.cinesIds = selectCine.map((valor) => valor.llave);
          valores.actores = actorSelect;
          onSubmit(valores, acciones);
        }}
        validationSchema={Yup.object({
          titulo: Yup.string()
            .required("Este campo es requerido")
            .firstLetterUpCasse(),
        })}
      >
        {(formikProps) => (
          <Form className="text-amber-50">
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
            <div>
              <label>Generos</label>
              <MultiSelector
                seleccionados={selectGenero}
                noSeleccionados={noSelectGenero}
                onChange={(seleccionados, noSeleccionados) => {
                  setSelectGenero(seleccionados);
                  setNoSelectGenero(noSeleccionados);
                }}
              />
            </div>

            <div>
              <label>Cines</label>
              <MultiSelector
                seleccionados={selectCine}
                noSeleccionados={noSelectCine}
                onChange={(seleccionados, noSeleccionados) => {
                  setSelectCine(seleccionados);
                  setNoSelectCine(noSeleccionados);
                }}
              />
            </div>

            <TypeAheadActores
              onAdd={(actores) => {
                setActorSelect(actores);
              }}
              onRemove={(actor) => {
                const actores = actorSelect.filter((x) => x !== actor);
                setActorSelect(actores);
              }}
              actores={actorSelect}
              listadoUI={(actor: actorPeliculaDTO) => (
                <>
                  <div className="flex items-center justify-between w-[60%]  m-2 ">
                    <img
                      alt="imagen actor"
                      src={actor.foto}
                      style={{
                        width: "44px",
                        height: "44px",
                        margin: "10px 10px",
                      }}
                    />
                    <span>{actor.nombre}</span>
                    <input
                      className="bg-amber-50 m-2 p-2 h-10 rounded text-black "
                      placeholder="Personaje"
                      type="text"
                      value={actor.personaje}
                      onChange={(e) => {
                        const index = actorSelect.findIndex(
                          (x) => x.id === actor.id
                        );
                        const actores = [...actorSelect];
                        actores[index].personaje = e.currentTarget.value;
                        setActorSelect(actores);
                      }}
                    />
                  </div>
                </>
              )}
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
  cinesSeleccionados: cineDTO[];
  cineNoSeleccionado: cineDTO[];

  actorSeleccionado: actorPeliculaDTO[];
}
