import { Link, useNavigate } from "react-router-dom";
import Button from "../Utils/Button";
import { Field, Form, Formik } from "formik";

export default function CreateGenero() {
  const navigate = useNavigate();
  return (
    <>
      <h3 className="text-amber-50">Crear Género</h3>
      <Formik
        initialValues={{
          nombre: "",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        <Form className=" text-amber-50">
          <label htmlFor="nombre">Nombre</label>
          <Field name="nombre" />

          <div className="flex flex-col">
            <Button type="submit">Salvar</Button>
            <Link
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
              to="/Generos"
            >
              Cancelar
            </Link>
          </div>
        </Form>
      </Formik>
    </>
  );
}
