import { Formik, Form, Field } from "formik";

import type { generoDTO } from "../Generos/generos.model";
import Button from "../Utils/Button";

export default function SearchPeliculas() {
  const valorIncial: SearchPeliculasProps = {
    titulo: "",
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  const generos: generoDTO[] = [
    { id: 1, nombre: "Accion" },
    { id: 2, nombre: "Pelea" },
    { id: 3, nombre: "Anime" },
  ];

  /*Listado de generos en memoria*/
  return (
    <>
      <h3 className="text-amber-50">Buscar Pelicula</h3>
      <Formik
        initialValues={valorIncial}
        onSubmit={(valores) => {
          console.log(valores);
        }}
      >
        {(formikProps) => (
          <Form>
            <div className="flex items-center">
              <div className="flex flex-col p-2 m-2">
                <input
                  type="text"
                  className="bg-black border-2 text-amber-50 rounded"
                  id="titulo"
                  placeholder="Titulo pelicula"
                  {...formikProps.getFieldProps("titulo")}
                />
              </div>
              <div className=" flex flex-col p-2 m-2">
                <select
                  className="text-amber-50 border rounded"
                  {...formikProps.getFieldProps("generoId")}
                >
                  <option className="bg-black" value="0">
                    Seleccione un genero...
                  </option>

                  {generos.map((genero) => (
                    <option
                      className="bg-black"
                      key={genero.id}
                      value={genero.id}
                    >
                      {genero.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className=" flex  p-2 m-2">
                <Field
                  className="text-amber-50 border rounded p-1 m-1"
                  id="proximosEstrenos"
                  name="proximosEstrenos"
                  type="checkbox"
                />
                <label
                  className="text-amber-50 p-1 m-1"
                  htmlFor="proximosEstrenos"
                >
                  Proximos estrenos
                </label>
              </div>

              <div className=" flex p-2 m-2">
                <Field
                  className="text-amber-50 border rounded p-1 m-1"
                  id="enCines"
                  name="enCines"
                  type="checkbox"
                />
                <label className="text-amber-50 p-1 m-1" htmlFor="enCines">
                  En cines
                </label>
              </div>

              <Button
                onClick={() => formikProps.submitForm()}
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Filtra
              </Button>
              <Button
                onClick={() => formikProps.setValues(valorIncial)}
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
              >
                Limpiar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface SearchPeliculasProps {
  titulo?: string;
  generoId?: number;
  proximosEstrenos?: boolean;
  enCines?: boolean;
  // Define any props you need here
}
